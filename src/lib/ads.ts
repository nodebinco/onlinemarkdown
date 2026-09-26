/** AdSense publisher — matches app.html + ads.txt */
export const ADSENSE_CLIENT = 'ca-pub-7058302262735531';

/**
 * Paste numeric `data-ad-slot` from AdSense → Ads → By ad unit → Display (Responsive).
 * One unit is enough — reuse the same ID for editor / inArticle / footer.
 * Empty string = that placement is skipped.
 */
export const AD_SLOTS = {
  /** Under editor toolbar — most pageviews */
  editor: '9196261876',
  /** Mid-scroll on docs / tools pages */
  inArticle: '9196261876',
  /** Above footer on content pages */
  footer: '9196261876',
} as const;
