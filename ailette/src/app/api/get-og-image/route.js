import { NextResponse } from 'next/server';
import { load } from 'cheerio';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Use cheerio to parse HTML and extract meta tags
    const $ = load(html);
    
    // Try to find the Twitter image first
    let imageUrl = $('meta[name="twitter:image"]').attr('content') || 
                   $('meta[property="twitter:image"]').attr('content');
    
    // If no Twitter image, try OpenGraph image
    if (!imageUrl) {
      imageUrl = $('meta[property="og:image"]').attr('content');
    }
    
    // If still no image, look for any other meta image
    if (!imageUrl) {
      imageUrl = $('meta[name="image"]').attr('content') ||
                 $('meta[itemprop="image"]').attr('content');
    }
    
    if (imageUrl) {
      // Make sure the URL is absolute
      if (!imageUrl.startsWith('http')) {
        const siteUrl = new URL(url);
        imageUrl = `${siteUrl.protocol}//${siteUrl.host}${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;
      }
      
      return NextResponse.json({ success: true, imageUrl });
    } else {
      return NextResponse.json({ success: false, error: 'No OG or Twitter image found' });
    }
  } catch (error) {
    console.error('Error fetching OG image:', error);
    return NextResponse.json({ error: 'Failed to fetch OG image' }, { status: 500 });
  }
} 