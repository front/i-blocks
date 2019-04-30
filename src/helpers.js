import { parse } from 'url';

// Video helpers
export function parseVideo (videoUrl) {
  try {
    const url = parse(videoUrl, true);
    if (url.hostname.includes('youtube')) {
      return {
        provider: 'youtube',
        id: url.query.v,
      };
    }
    if (url.hostname.includes('youtu.be')) {
      return {
        provider: 'youtube',
        id: url.pathname.substr(1),
      };
    }
    if (url.hostname.includes('vimeo')) {
      return {
        provider: 'vimeo',
        id: url.pathname.substr(1),
      };
    }
    return false;
  }
  catch (err) {
    return false;
  }
}

export function getVideoThumb (provider, id) {
  if (provider === 'youtube') {
    return `//img.youtube.com/vi/${id}/sddefault.jpg`;
  }
  return false;
}

// General media helpers
export function getMediaAttrs (media) {
  if(media && media.data) {
    return Object.keys(media.data).reduce((d, key) => {
      d[`data-${key.toLowerCase().replace(/[^a-z0-9]/g, '-')}`] = media.data[key];
      return d;
    }, {});
  }
  return {};
}
