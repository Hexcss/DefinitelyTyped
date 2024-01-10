declare module "inky" {
  export interface InkyOptions {
    cheerio?: CheerioOptions;
    src?: string;
    dest?: string;
    components?: Record<string, string>;
    columnCount?: number;
  }

  export interface CheerioOptions {
    xmlMode?: boolean | undefined;
    decodeEntities?: boolean | undefined;
    lowerCaseTags?: boolean | undefined;
    lowerCaseAttributeNames?: boolean | undefined;
    recognizeCDATA?: boolean | undefined;
    recognizeSelfClosing?: boolean | undefined;
    normalizeWhitespace?: boolean | undefined;
    withStartIndices?: boolean | undefined;
    withEndIndices?: boolean | undefined;
    ignoreWhitespace?: boolean | undefined;
    _useHtmlParser2?: boolean | undefined;
  }

  export class Inky {
    constructor(options?: InkyOptions);
    releaseTheKraken(xmlString: string, cheerioOpts?: CheerioOptions): string;
    static mergeCheerioOpts(opts?: CheerioOptions): CheerioOptions;
    // Define other methods and properties as needed
  }

  /**
   * Main function exported by the inky module.
   * @param opts - Inky options.
   * @param cb - Callback function.
   */
  export default function inky(
    opts?: InkyOptions,
    cb?: (err: Error, result?: any) => void
  ): any;
}
