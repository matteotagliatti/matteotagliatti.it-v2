// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type GetMostPlayedTracks = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    me: {
      spotify: {
        /**
         * Get the current user’s top tracks based on calculated affinity.
         */
        topTracks: {
          /**
           * A list of edges
           */
          edges: Array<{
            /**
             * The item at the end of the edge
             */
            node: {
              /**
               * The name of the track.
               */
              name: string;
              /**
               * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
               */
              artists: Array<{
                /**
                 * The name of the artist.
                 */
                name: string;
              }>;
              /**
               * Known external URLs for this track.
               */
              externalUrls: {
                /**
                 * The Spotify URL for the object.
                 */
                spotify: string;
              };
              /**
               * The album on which the track appears. The album object includes a link in href to full information about the album.
               */
              album: {
                /**
                 * The cover art for the album in various sizes, widest first.
                 */
                images: Array<{
                  /**
                   * The source URL of the image.
                   */
                  url: string;
                }>;
              };
            };
          }>;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchGetMostPlayedTracks(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<GetMostPlayedTracks>;
