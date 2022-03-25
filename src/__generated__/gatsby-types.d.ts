/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly trailingSlash: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  readonly fluid: Maybe<ContentfulFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  layout?: Maybe<ContentfulImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ContentfulImagePlaceholder>;
  formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus: Maybe<ContentfulImageCropFocus>;
  cornerRadius?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  cornerRadius?: Maybe<Scalars['Int']>;
};

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp';

type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale';

type ContentfulImageCropFocus =
  | 'top'
  | 'top_left'
  | 'top_right'
  | 'bottom'
  | 'bottom_left'
  | 'bottom_right'
  | 'right'
  | 'left'
  | 'face'
  | 'faces'
  | 'center';

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ContentfulImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulPageBlogPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly author: Maybe<ContentfulEntityPerson>;
  readonly description: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly body: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPageBlogPostSys>;
  readonly seo: Maybe<ContentfulSeo>;
  /** Returns all children nodes filtered by type contentfulPageBlogPostDescriptionTextNode */
  readonly childrenContentfulPageBlogPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostDescriptionTextNode>>>;
  /** Returns the first child node of type contentfulPageBlogPostDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  /** Returns all children nodes filtered by type contentfulPageBlogPostBodyTextNode */
  readonly childrenContentfulPageBlogPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostBodyTextNode>>>;
  /** Returns the first child node of type contentfulPageBlogPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPageBlogPost_publishDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPageBlogPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPageBlogPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulPageBlogPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPageBlogPostSysContentType>;
};

type ContentfulPageBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulPageBlogPostSysContentTypeSys>;
};

type ContentfulPageBlogPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulEntityPerson = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly company: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly phone: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly page___blog_post: Maybe<ReadonlyArray<Maybe<ContentfulPageBlogPost>>>;
  readonly shortBio: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulEntityPersonSys>;
  readonly facebook: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulEntityPersonShortBioTextNode */
  readonly childrenContentfulEntityPersonShortBioTextNode: Maybe<ReadonlyArray<Maybe<contentfulEntityPersonShortBioTextNode>>>;
  /** Returns the first child node of type contentfulEntityPersonShortBioTextNode or null if there are no children of given type on this node */
  readonly childContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulEntityPerson_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulEntityPerson_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulEntityPersonSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulEntityPersonSysContentType>;
};

type ContentfulEntityPersonSysContentType = {
  readonly sys: Maybe<ContentfulEntityPersonSysContentTypeSys>;
};

type ContentfulEntityPersonSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPageFlexPage = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly slug: Maybe<Scalars['String']>;
  readonly content: Maybe<ReadonlyArray<Maybe<ContentfulComponentCalloutContentfulComponentHeroContentfulComponentParagraphUnion>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPageFlexPageSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulPageFlexPage_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPageFlexPage_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentCalloutContentfulComponentHeroContentfulComponentParagraphUnion = ContentfulComponentCallout | ContentfulComponentHero | ContentfulComponentParagraph;

type ContentfulPageFlexPageSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPageFlexPageSysContentType>;
};

type ContentfulPageFlexPageSysContentType = {
  readonly sys: Maybe<ContentfulPageFlexPageSysContentTypeSys>;
};

type ContentfulPageFlexPageSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulSeo = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly robots: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly page___blog_post: Maybe<ReadonlyArray<Maybe<ContentfulPageBlogPost>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulSeoSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulSeo_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulSeo_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulSeoSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulSeoSysContentType>;
};

type ContentfulSeoSysContentType = {
  readonly sys: Maybe<ContentfulSeoSysContentTypeSys>;
};

type ContentfulSeoSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentHero = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<Scalars['String']>;
  readonly image: Maybe<ContentfulAsset>;
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulComponentHeroSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulComponentHero_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulComponentHero_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentHeroSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulComponentHeroSysContentType>;
};

type ContentfulComponentHeroSysContentType = {
  readonly sys: Maybe<ContentfulComponentHeroSysContentTypeSys>;
};

type ContentfulComponentHeroSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentNavigation = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly links: Maybe<ReadonlyArray<Maybe<ContentfulLink>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulComponentNavigationSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulComponentNavigation_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulComponentNavigation_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentNavigationSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulComponentNavigationSysContentType>;
};

type ContentfulComponentNavigationSysContentType = {
  readonly sys: Maybe<ContentfulComponentNavigationSysContentTypeSys>;
};

type ContentfulComponentNavigationSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulLink = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly href: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly component___navigation: Maybe<ReadonlyArray<Maybe<ContentfulComponentNavigation>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulLinkSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulLink_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulLink_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulLinkSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulLinkSysContentType>;
};

type ContentfulLinkSysContentType = {
  readonly sys: Maybe<ContentfulLinkSysContentTypeSys>;
};

type ContentfulLinkSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentFooter = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<ContentfulComponentFooterContent>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulComponentFooterSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulComponentFooter_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulComponentFooter_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentFooterContent = {
  readonly raw: Maybe<Scalars['String']>;
};

type ContentfulComponentFooterSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulComponentFooterSysContentType>;
};

type ContentfulComponentFooterSysContentType = {
  readonly sys: Maybe<ContentfulComponentFooterSysContentTypeSys>;
};

type ContentfulComponentFooterSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraph = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly content: Maybe<ContentfulComponentParagraphContent>;
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulComponentParagraphSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulComponentParagraph_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulComponentParagraph_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraphContent = {
  readonly raw: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraphSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulComponentParagraphSysContentType>;
};

type ContentfulComponentParagraphSysContentType = {
  readonly sys: Maybe<ContentfulComponentParagraphSysContentTypeSys>;
};

type ContentfulComponentParagraphSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentCallout = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly heading: Maybe<Scalars['String']>;
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly body: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulComponentCalloutSys>;
  /** Returns all children nodes filtered by type contentfulComponentCalloutBodyTextNode */
  readonly childrenContentfulComponentCalloutBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulComponentCalloutBodyTextNode>>>;
  /** Returns the first child node of type contentfulComponentCalloutBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulComponentCallout_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulComponentCallout_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulComponentCalloutSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulComponentCalloutSysContentType>;
};

type ContentfulComponentCalloutSysContentType = {
  readonly sys: Maybe<ContentfulComponentCalloutSysContentTypeSys>;
};

type ContentfulComponentCalloutSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulComponentCarousel = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type contentfulPageBlogPostDescriptionTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPageBlogPostDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPageBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPageBlogPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPageBlogPostBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPageBlogPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulEntityPersonShortBioTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly shortBio: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulEntityPersonShortBioTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulEntityPersonShortBioTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulComponentCalloutBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulComponentCalloutBodyTextNodeSys>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulComponentCalloutBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulPageBlogPost: Maybe<ContentfulPageBlogPost>;
  readonly allContentfulPageBlogPost: ContentfulPageBlogPostConnection;
  readonly contentfulEntityPerson: Maybe<ContentfulEntityPerson>;
  readonly allContentfulEntityPerson: ContentfulEntityPersonConnection;
  readonly contentfulPageFlexPage: Maybe<ContentfulPageFlexPage>;
  readonly allContentfulPageFlexPage: ContentfulPageFlexPageConnection;
  readonly contentfulSeo: Maybe<ContentfulSeo>;
  readonly allContentfulSeo: ContentfulSeoConnection;
  readonly contentfulComponentHero: Maybe<ContentfulComponentHero>;
  readonly allContentfulComponentHero: ContentfulComponentHeroConnection;
  readonly contentfulComponentNavigation: Maybe<ContentfulComponentNavigation>;
  readonly allContentfulComponentNavigation: ContentfulComponentNavigationConnection;
  readonly contentfulLink: Maybe<ContentfulLink>;
  readonly allContentfulLink: ContentfulLinkConnection;
  readonly contentfulComponentFooter: Maybe<ContentfulComponentFooter>;
  readonly allContentfulComponentFooter: ContentfulComponentFooterConnection;
  readonly contentfulComponentParagraph: Maybe<ContentfulComponentParagraph>;
  readonly allContentfulComponentParagraph: ContentfulComponentParagraphConnection;
  readonly contentfulComponentCallout: Maybe<ContentfulComponentCallout>;
  readonly allContentfulComponentCallout: ContentfulComponentCalloutConnection;
  readonly contentfulComponentCarousel: Maybe<ContentfulComponentCarousel>;
  readonly allContentfulComponentCarousel: ContentfulComponentCarouselConnection;
  readonly contentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly allContentfulPageBlogPostDescriptionTextNode: contentfulPageBlogPostDescriptionTextNodeConnection;
  readonly contentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly allContentfulPageBlogPostBodyTextNode: contentfulPageBlogPostBodyTextNodeConnection;
  readonly contentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly allContentfulEntityPersonShortBioTextNode: contentfulEntityPersonShortBioTextNodeConnection;
  readonly contentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly allContentfulComponentCalloutBodyTextNode: contentfulComponentCalloutBodyTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  trailingSlash: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageBlogPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  publishDate: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  heroImage: Maybe<ContentfulAssetFilterInput>;
  author: Maybe<ContentfulEntityPersonFilterInput>;
  description: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  body: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPageBlogPostSysFilterInput>;
  seo: Maybe<ContentfulSeoFilterInput>;
  childrenContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterListInput>;
  childContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  childrenContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNodeFilterListInput>;
  childContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPageBlogPostArgs = {
  filter: Maybe<ContentfulPageBlogPostFilterInput>;
  sort: Maybe<ContentfulPageBlogPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntityPersonArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  company: Maybe<StringQueryOperatorInput>;
  email: Maybe<StringQueryOperatorInput>;
  phone: Maybe<StringQueryOperatorInput>;
  twitter: Maybe<StringQueryOperatorInput>;
  github: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  page___blog_post: Maybe<ContentfulPageBlogPostFilterListInput>;
  shortBio: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulEntityPersonSysFilterInput>;
  facebook: Maybe<StringQueryOperatorInput>;
  childrenContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNodeFilterListInput>;
  childContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulEntityPersonArgs = {
  filter: Maybe<ContentfulEntityPersonFilterInput>;
  sort: Maybe<ContentfulEntityPersonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageFlexPageArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPageFlexPageSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulPageFlexPageArgs = {
  filter: Maybe<ContentfulPageFlexPageFilterInput>;
  sort: Maybe<ContentfulPageFlexPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulSeoArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  robots: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  page___blog_post: Maybe<ContentfulPageBlogPostFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulSeoSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulSeoArgs = {
  filter: Maybe<ContentfulSeoFilterInput>;
  sort: Maybe<ContentfulSeoSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentHeroArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulComponentHeroSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentHeroArgs = {
  filter: Maybe<ContentfulComponentHeroFilterInput>;
  sort: Maybe<ContentfulComponentHeroSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentNavigationArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  links: Maybe<ContentfulLinkFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulComponentNavigationSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentNavigationArgs = {
  filter: Maybe<ContentfulComponentNavigationFilterInput>;
  sort: Maybe<ContentfulComponentNavigationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulLinkArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  text: Maybe<StringQueryOperatorInput>;
  component___navigation: Maybe<ContentfulComponentNavigationFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulLinkSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulLinkArgs = {
  filter: Maybe<ContentfulLinkFilterInput>;
  sort: Maybe<ContentfulLinkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentFooterArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulComponentFooterContentFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulComponentFooterSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentFooterArgs = {
  filter: Maybe<ContentfulComponentFooterFilterInput>;
  sort: Maybe<ContentfulComponentFooterSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentParagraphArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  content: Maybe<ContentfulComponentParagraphContentFilterInput>;
  page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulComponentParagraphSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentParagraphArgs = {
  filter: Maybe<ContentfulComponentParagraphFilterInput>;
  sort: Maybe<ContentfulComponentParagraphSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentCalloutArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  heading: Maybe<StringQueryOperatorInput>;
  page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  body: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulComponentCalloutSysFilterInput>;
  childrenContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNodeFilterListInput>;
  childContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentCalloutArgs = {
  filter: Maybe<ContentfulComponentCalloutFilterInput>;
  sort: Maybe<ContentfulComponentCalloutSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentCarouselArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulComponentCarouselArgs = {
  filter: Maybe<ContentfulComponentCarouselFilterInput>;
  sort: Maybe<ContentfulComponentCarouselSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageBlogPostDescriptionTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPageBlogPostDescriptionTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPageBlogPostDescriptionTextNodeArgs = {
  filter: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  sort: Maybe<contentfulPageBlogPostDescriptionTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPageBlogPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPageBlogPostBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPageBlogPostBodyTextNodeArgs = {
  filter: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulPageBlogPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulEntityPersonShortBioTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  shortBio: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulEntityPersonShortBioTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulEntityPersonShortBioTextNodeArgs = {
  filter: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  sort: Maybe<contentfulEntityPersonShortBioTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulComponentCalloutBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulComponentCalloutBodyTextNodeSysFilterInput>;
  childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulComponentCalloutBodyTextNodeArgs = {
  filter: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  sort: Maybe<contentfulComponentCalloutBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'port'
  | 'host'
  | 'pathPrefix'
  | 'polyfill'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
  readonly trailingSlash: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter.title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings.id'
  | 'headings.value'
  | 'headings.depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_maxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_minArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_sumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_maxArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_minArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_sumArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file.url'
  | 'file.details.size'
  | 'file.details.image.width'
  | 'file.details.image.height'
  | 'file.fileName'
  | 'file.contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys.type'
  | 'sys.revision'
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'gatsbyImageData'
  | 'resize.base64'
  | 'resize.tracedSVG'
  | 'resize.src'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_maxArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_minArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_sumArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntityPersonFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly company: Maybe<StringQueryOperatorInput>;
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly phone: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly github: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly page___blog_post: Maybe<ContentfulPageBlogPostFilterListInput>;
  readonly shortBio: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulEntityPersonSysFilterInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly childrenContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNodeFilterListInput>;
  readonly childContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPageBlogPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPageBlogPostFilterInput>;
};

type ContentfulPageBlogPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly publishDate: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly heroImage: Maybe<ContentfulAssetFilterInput>;
  readonly author: Maybe<ContentfulEntityPersonFilterInput>;
  readonly description: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  readonly body: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPageBlogPostSysFilterInput>;
  readonly seo: Maybe<ContentfulSeoFilterInput>;
  readonly childrenContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterListInput>;
  readonly childContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  readonly childrenContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNodeFilterListInput>;
  readonly childContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type contentfulPageBlogPostDescriptionTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPageBlogPostDescriptionTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPageBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPageBlogPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPageBlogPostBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPageBlogPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPageBlogPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPageBlogPostSysContentTypeFilterInput>;
};

type ContentfulPageBlogPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPageBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulPageBlogPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulSeoFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly robots: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly page___blog_post: Maybe<ContentfulPageBlogPostFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulSeoSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulSeoSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulSeoSysContentTypeFilterInput>;
};

type ContentfulSeoSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulSeoSysContentTypeSysFilterInput>;
};

type ContentfulSeoSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulPageBlogPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
};

type contentfulPageBlogPostBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
};

type contentfulEntityPersonShortBioTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly shortBio: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulEntityPersonShortBioTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulEntityPersonShortBioTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntityPersonSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulEntityPersonSysContentTypeFilterInput>;
};

type ContentfulEntityPersonSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulEntityPersonSysContentTypeSysFilterInput>;
};

type ContentfulEntityPersonSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulEntityPersonShortBioTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
};

type ContentfulPageBlogPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPageBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageBlogPostGroupConnection>;
};


type ContentfulPageBlogPostConnection_distinctArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostConnection_maxArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostConnection_minArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostConnection_sumArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageBlogPostFieldsEnum;
};

type ContentfulPageBlogPostEdge = {
  readonly next: Maybe<ContentfulPageBlogPost>;
  readonly node: ContentfulPageBlogPost;
  readonly previous: Maybe<ContentfulPageBlogPost>;
};

type ContentfulPageBlogPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'publishDate'
  | 'tags'
  | 'heroImage.contentful_id'
  | 'heroImage.id'
  | 'heroImage.spaceId'
  | 'heroImage.createdAt'
  | 'heroImage.updatedAt'
  | 'heroImage.file.url'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.contentType'
  | 'heroImage.title'
  | 'heroImage.description'
  | 'heroImage.node_locale'
  | 'heroImage.sys.type'
  | 'heroImage.sys.revision'
  | 'heroImage.fixed.base64'
  | 'heroImage.fixed.tracedSVG'
  | 'heroImage.fixed.aspectRatio'
  | 'heroImage.fixed.width'
  | 'heroImage.fixed.height'
  | 'heroImage.fixed.src'
  | 'heroImage.fixed.srcSet'
  | 'heroImage.fixed.srcWebp'
  | 'heroImage.fixed.srcSetWebp'
  | 'heroImage.fluid.base64'
  | 'heroImage.fluid.tracedSVG'
  | 'heroImage.fluid.aspectRatio'
  | 'heroImage.fluid.src'
  | 'heroImage.fluid.srcSet'
  | 'heroImage.fluid.srcWebp'
  | 'heroImage.fluid.srcSetWebp'
  | 'heroImage.fluid.sizes'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.resize.base64'
  | 'heroImage.resize.tracedSVG'
  | 'heroImage.resize.src'
  | 'heroImage.resize.width'
  | 'heroImage.resize.height'
  | 'heroImage.resize.aspectRatio'
  | 'heroImage.parent.id'
  | 'heroImage.parent.parent.id'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.children'
  | 'heroImage.children.id'
  | 'heroImage.children.parent.id'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.children.children'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'author.contentful_id'
  | 'author.id'
  | 'author.node_locale'
  | 'author.name'
  | 'author.title'
  | 'author.company'
  | 'author.email'
  | 'author.phone'
  | 'author.twitter'
  | 'author.github'
  | 'author.image.contentful_id'
  | 'author.image.id'
  | 'author.image.spaceId'
  | 'author.image.createdAt'
  | 'author.image.updatedAt'
  | 'author.image.file.url'
  | 'author.image.file.fileName'
  | 'author.image.file.contentType'
  | 'author.image.title'
  | 'author.image.description'
  | 'author.image.node_locale'
  | 'author.image.sys.type'
  | 'author.image.sys.revision'
  | 'author.image.fixed.base64'
  | 'author.image.fixed.tracedSVG'
  | 'author.image.fixed.aspectRatio'
  | 'author.image.fixed.width'
  | 'author.image.fixed.height'
  | 'author.image.fixed.src'
  | 'author.image.fixed.srcSet'
  | 'author.image.fixed.srcWebp'
  | 'author.image.fixed.srcSetWebp'
  | 'author.image.fluid.base64'
  | 'author.image.fluid.tracedSVG'
  | 'author.image.fluid.aspectRatio'
  | 'author.image.fluid.src'
  | 'author.image.fluid.srcSet'
  | 'author.image.fluid.srcWebp'
  | 'author.image.fluid.srcSetWebp'
  | 'author.image.fluid.sizes'
  | 'author.image.gatsbyImageData'
  | 'author.image.resize.base64'
  | 'author.image.resize.tracedSVG'
  | 'author.image.resize.src'
  | 'author.image.resize.width'
  | 'author.image.resize.height'
  | 'author.image.resize.aspectRatio'
  | 'author.image.parent.id'
  | 'author.image.parent.children'
  | 'author.image.children'
  | 'author.image.children.id'
  | 'author.image.children.children'
  | 'author.image.internal.content'
  | 'author.image.internal.contentDigest'
  | 'author.image.internal.description'
  | 'author.image.internal.fieldOwners'
  | 'author.image.internal.ignoreType'
  | 'author.image.internal.mediaType'
  | 'author.image.internal.owner'
  | 'author.image.internal.type'
  | 'author.page___blog_post'
  | 'author.page___blog_post.contentful_id'
  | 'author.page___blog_post.id'
  | 'author.page___blog_post.node_locale'
  | 'author.page___blog_post.title'
  | 'author.page___blog_post.slug'
  | 'author.page___blog_post.publishDate'
  | 'author.page___blog_post.tags'
  | 'author.page___blog_post.heroImage.contentful_id'
  | 'author.page___blog_post.heroImage.id'
  | 'author.page___blog_post.heroImage.spaceId'
  | 'author.page___blog_post.heroImage.createdAt'
  | 'author.page___blog_post.heroImage.updatedAt'
  | 'author.page___blog_post.heroImage.title'
  | 'author.page___blog_post.heroImage.description'
  | 'author.page___blog_post.heroImage.node_locale'
  | 'author.page___blog_post.heroImage.gatsbyImageData'
  | 'author.page___blog_post.heroImage.children'
  | 'author.page___blog_post.author.contentful_id'
  | 'author.page___blog_post.author.id'
  | 'author.page___blog_post.author.node_locale'
  | 'author.page___blog_post.author.name'
  | 'author.page___blog_post.author.title'
  | 'author.page___blog_post.author.company'
  | 'author.page___blog_post.author.email'
  | 'author.page___blog_post.author.phone'
  | 'author.page___blog_post.author.twitter'
  | 'author.page___blog_post.author.github'
  | 'author.page___blog_post.author.page___blog_post'
  | 'author.page___blog_post.author.spaceId'
  | 'author.page___blog_post.author.createdAt'
  | 'author.page___blog_post.author.updatedAt'
  | 'author.page___blog_post.author.facebook'
  | 'author.page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'author.page___blog_post.author.children'
  | 'author.page___blog_post.description.id'
  | 'author.page___blog_post.description.children'
  | 'author.page___blog_post.description.description'
  | 'author.page___blog_post.description.childrenMarkdownRemark'
  | 'author.page___blog_post.body.id'
  | 'author.page___blog_post.body.children'
  | 'author.page___blog_post.body.body'
  | 'author.page___blog_post.body.childrenMarkdownRemark'
  | 'author.page___blog_post.spaceId'
  | 'author.page___blog_post.createdAt'
  | 'author.page___blog_post.updatedAt'
  | 'author.page___blog_post.sys.type'
  | 'author.page___blog_post.sys.revision'
  | 'author.page___blog_post.seo.contentful_id'
  | 'author.page___blog_post.seo.id'
  | 'author.page___blog_post.seo.node_locale'
  | 'author.page___blog_post.seo.title'
  | 'author.page___blog_post.seo.description'
  | 'author.page___blog_post.seo.robots'
  | 'author.page___blog_post.seo.page___blog_post'
  | 'author.page___blog_post.seo.spaceId'
  | 'author.page___blog_post.seo.createdAt'
  | 'author.page___blog_post.seo.updatedAt'
  | 'author.page___blog_post.seo.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.parent.id'
  | 'author.page___blog_post.parent.children'
  | 'author.page___blog_post.children'
  | 'author.page___blog_post.children.id'
  | 'author.page___blog_post.children.children'
  | 'author.page___blog_post.internal.content'
  | 'author.page___blog_post.internal.contentDigest'
  | 'author.page___blog_post.internal.description'
  | 'author.page___blog_post.internal.fieldOwners'
  | 'author.page___blog_post.internal.ignoreType'
  | 'author.page___blog_post.internal.mediaType'
  | 'author.page___blog_post.internal.owner'
  | 'author.page___blog_post.internal.type'
  | 'author.shortBio.id'
  | 'author.shortBio.parent.id'
  | 'author.shortBio.parent.children'
  | 'author.shortBio.children'
  | 'author.shortBio.children.id'
  | 'author.shortBio.children.children'
  | 'author.shortBio.internal.content'
  | 'author.shortBio.internal.contentDigest'
  | 'author.shortBio.internal.description'
  | 'author.shortBio.internal.fieldOwners'
  | 'author.shortBio.internal.ignoreType'
  | 'author.shortBio.internal.mediaType'
  | 'author.shortBio.internal.owner'
  | 'author.shortBio.internal.type'
  | 'author.shortBio.shortBio'
  | 'author.shortBio.sys.type'
  | 'author.shortBio.childrenMarkdownRemark'
  | 'author.shortBio.childrenMarkdownRemark.id'
  | 'author.shortBio.childrenMarkdownRemark.excerpt'
  | 'author.shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childrenMarkdownRemark.html'
  | 'author.shortBio.childrenMarkdownRemark.htmlAst'
  | 'author.shortBio.childrenMarkdownRemark.excerptAst'
  | 'author.shortBio.childrenMarkdownRemark.headings'
  | 'author.shortBio.childrenMarkdownRemark.timeToRead'
  | 'author.shortBio.childrenMarkdownRemark.tableOfContents'
  | 'author.shortBio.childrenMarkdownRemark.children'
  | 'author.shortBio.childMarkdownRemark.id'
  | 'author.shortBio.childMarkdownRemark.excerpt'
  | 'author.shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childMarkdownRemark.html'
  | 'author.shortBio.childMarkdownRemark.htmlAst'
  | 'author.shortBio.childMarkdownRemark.excerptAst'
  | 'author.shortBio.childMarkdownRemark.headings'
  | 'author.shortBio.childMarkdownRemark.timeToRead'
  | 'author.shortBio.childMarkdownRemark.tableOfContents'
  | 'author.shortBio.childMarkdownRemark.children'
  | 'author.spaceId'
  | 'author.createdAt'
  | 'author.updatedAt'
  | 'author.sys.type'
  | 'author.sys.revision'
  | 'author.facebook'
  | 'author.childrenContentfulEntityPersonShortBioTextNode'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.parent.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.parent.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.content'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.description'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.type'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.sys.type'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.parent.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.parent.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.children.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.children.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.content'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.description'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.type'
  | 'author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'author.childContentfulEntityPersonShortBioTextNode.sys.type'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.parent.id'
  | 'author.parent.parent.id'
  | 'author.parent.parent.children'
  | 'author.parent.children'
  | 'author.parent.children.id'
  | 'author.parent.children.children'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.children'
  | 'author.children.id'
  | 'author.children.parent.id'
  | 'author.children.parent.children'
  | 'author.children.children'
  | 'author.children.children.id'
  | 'author.children.children.children'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'description.id'
  | 'description.parent.id'
  | 'description.parent.parent.id'
  | 'description.parent.parent.children'
  | 'description.parent.children'
  | 'description.parent.children.id'
  | 'description.parent.children.children'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.children'
  | 'description.children.id'
  | 'description.children.parent.id'
  | 'description.children.parent.children'
  | 'description.children.children'
  | 'description.children.children.id'
  | 'description.children.children.children'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.description'
  | 'description.sys.type'
  | 'description.childrenMarkdownRemark'
  | 'description.childrenMarkdownRemark.id'
  | 'description.childrenMarkdownRemark.frontmatter.title'
  | 'description.childrenMarkdownRemark.excerpt'
  | 'description.childrenMarkdownRemark.rawMarkdownBody'
  | 'description.childrenMarkdownRemark.html'
  | 'description.childrenMarkdownRemark.htmlAst'
  | 'description.childrenMarkdownRemark.excerptAst'
  | 'description.childrenMarkdownRemark.headings'
  | 'description.childrenMarkdownRemark.headings.id'
  | 'description.childrenMarkdownRemark.headings.value'
  | 'description.childrenMarkdownRemark.headings.depth'
  | 'description.childrenMarkdownRemark.timeToRead'
  | 'description.childrenMarkdownRemark.tableOfContents'
  | 'description.childrenMarkdownRemark.wordCount.paragraphs'
  | 'description.childrenMarkdownRemark.wordCount.sentences'
  | 'description.childrenMarkdownRemark.wordCount.words'
  | 'description.childrenMarkdownRemark.parent.id'
  | 'description.childrenMarkdownRemark.parent.children'
  | 'description.childrenMarkdownRemark.children'
  | 'description.childrenMarkdownRemark.children.id'
  | 'description.childrenMarkdownRemark.children.children'
  | 'description.childrenMarkdownRemark.internal.content'
  | 'description.childrenMarkdownRemark.internal.contentDigest'
  | 'description.childrenMarkdownRemark.internal.description'
  | 'description.childrenMarkdownRemark.internal.fieldOwners'
  | 'description.childrenMarkdownRemark.internal.ignoreType'
  | 'description.childrenMarkdownRemark.internal.mediaType'
  | 'description.childrenMarkdownRemark.internal.owner'
  | 'description.childrenMarkdownRemark.internal.type'
  | 'description.childMarkdownRemark.id'
  | 'description.childMarkdownRemark.frontmatter.title'
  | 'description.childMarkdownRemark.excerpt'
  | 'description.childMarkdownRemark.rawMarkdownBody'
  | 'description.childMarkdownRemark.html'
  | 'description.childMarkdownRemark.htmlAst'
  | 'description.childMarkdownRemark.excerptAst'
  | 'description.childMarkdownRemark.headings'
  | 'description.childMarkdownRemark.headings.id'
  | 'description.childMarkdownRemark.headings.value'
  | 'description.childMarkdownRemark.headings.depth'
  | 'description.childMarkdownRemark.timeToRead'
  | 'description.childMarkdownRemark.tableOfContents'
  | 'description.childMarkdownRemark.wordCount.paragraphs'
  | 'description.childMarkdownRemark.wordCount.sentences'
  | 'description.childMarkdownRemark.wordCount.words'
  | 'description.childMarkdownRemark.parent.id'
  | 'description.childMarkdownRemark.parent.children'
  | 'description.childMarkdownRemark.children'
  | 'description.childMarkdownRemark.children.id'
  | 'description.childMarkdownRemark.children.children'
  | 'description.childMarkdownRemark.internal.content'
  | 'description.childMarkdownRemark.internal.contentDigest'
  | 'description.childMarkdownRemark.internal.description'
  | 'description.childMarkdownRemark.internal.fieldOwners'
  | 'description.childMarkdownRemark.internal.ignoreType'
  | 'description.childMarkdownRemark.internal.mediaType'
  | 'description.childMarkdownRemark.internal.owner'
  | 'description.childMarkdownRemark.internal.type'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'seo.contentful_id'
  | 'seo.id'
  | 'seo.node_locale'
  | 'seo.title'
  | 'seo.description'
  | 'seo.robots'
  | 'seo.image.contentful_id'
  | 'seo.image.id'
  | 'seo.image.spaceId'
  | 'seo.image.createdAt'
  | 'seo.image.updatedAt'
  | 'seo.image.file.url'
  | 'seo.image.file.fileName'
  | 'seo.image.file.contentType'
  | 'seo.image.title'
  | 'seo.image.description'
  | 'seo.image.node_locale'
  | 'seo.image.sys.type'
  | 'seo.image.sys.revision'
  | 'seo.image.fixed.base64'
  | 'seo.image.fixed.tracedSVG'
  | 'seo.image.fixed.aspectRatio'
  | 'seo.image.fixed.width'
  | 'seo.image.fixed.height'
  | 'seo.image.fixed.src'
  | 'seo.image.fixed.srcSet'
  | 'seo.image.fixed.srcWebp'
  | 'seo.image.fixed.srcSetWebp'
  | 'seo.image.fluid.base64'
  | 'seo.image.fluid.tracedSVG'
  | 'seo.image.fluid.aspectRatio'
  | 'seo.image.fluid.src'
  | 'seo.image.fluid.srcSet'
  | 'seo.image.fluid.srcWebp'
  | 'seo.image.fluid.srcSetWebp'
  | 'seo.image.fluid.sizes'
  | 'seo.image.gatsbyImageData'
  | 'seo.image.resize.base64'
  | 'seo.image.resize.tracedSVG'
  | 'seo.image.resize.src'
  | 'seo.image.resize.width'
  | 'seo.image.resize.height'
  | 'seo.image.resize.aspectRatio'
  | 'seo.image.parent.id'
  | 'seo.image.parent.children'
  | 'seo.image.children'
  | 'seo.image.children.id'
  | 'seo.image.children.children'
  | 'seo.image.internal.content'
  | 'seo.image.internal.contentDigest'
  | 'seo.image.internal.description'
  | 'seo.image.internal.fieldOwners'
  | 'seo.image.internal.ignoreType'
  | 'seo.image.internal.mediaType'
  | 'seo.image.internal.owner'
  | 'seo.image.internal.type'
  | 'seo.page___blog_post'
  | 'seo.page___blog_post.contentful_id'
  | 'seo.page___blog_post.id'
  | 'seo.page___blog_post.node_locale'
  | 'seo.page___blog_post.title'
  | 'seo.page___blog_post.slug'
  | 'seo.page___blog_post.publishDate'
  | 'seo.page___blog_post.tags'
  | 'seo.page___blog_post.heroImage.contentful_id'
  | 'seo.page___blog_post.heroImage.id'
  | 'seo.page___blog_post.heroImage.spaceId'
  | 'seo.page___blog_post.heroImage.createdAt'
  | 'seo.page___blog_post.heroImage.updatedAt'
  | 'seo.page___blog_post.heroImage.title'
  | 'seo.page___blog_post.heroImage.description'
  | 'seo.page___blog_post.heroImage.node_locale'
  | 'seo.page___blog_post.heroImage.gatsbyImageData'
  | 'seo.page___blog_post.heroImage.children'
  | 'seo.page___blog_post.author.contentful_id'
  | 'seo.page___blog_post.author.id'
  | 'seo.page___blog_post.author.node_locale'
  | 'seo.page___blog_post.author.name'
  | 'seo.page___blog_post.author.title'
  | 'seo.page___blog_post.author.company'
  | 'seo.page___blog_post.author.email'
  | 'seo.page___blog_post.author.phone'
  | 'seo.page___blog_post.author.twitter'
  | 'seo.page___blog_post.author.github'
  | 'seo.page___blog_post.author.page___blog_post'
  | 'seo.page___blog_post.author.spaceId'
  | 'seo.page___blog_post.author.createdAt'
  | 'seo.page___blog_post.author.updatedAt'
  | 'seo.page___blog_post.author.facebook'
  | 'seo.page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'seo.page___blog_post.author.children'
  | 'seo.page___blog_post.description.id'
  | 'seo.page___blog_post.description.children'
  | 'seo.page___blog_post.description.description'
  | 'seo.page___blog_post.description.childrenMarkdownRemark'
  | 'seo.page___blog_post.body.id'
  | 'seo.page___blog_post.body.children'
  | 'seo.page___blog_post.body.body'
  | 'seo.page___blog_post.body.childrenMarkdownRemark'
  | 'seo.page___blog_post.spaceId'
  | 'seo.page___blog_post.createdAt'
  | 'seo.page___blog_post.updatedAt'
  | 'seo.page___blog_post.sys.type'
  | 'seo.page___blog_post.sys.revision'
  | 'seo.page___blog_post.seo.contentful_id'
  | 'seo.page___blog_post.seo.id'
  | 'seo.page___blog_post.seo.node_locale'
  | 'seo.page___blog_post.seo.title'
  | 'seo.page___blog_post.seo.description'
  | 'seo.page___blog_post.seo.robots'
  | 'seo.page___blog_post.seo.page___blog_post'
  | 'seo.page___blog_post.seo.spaceId'
  | 'seo.page___blog_post.seo.createdAt'
  | 'seo.page___blog_post.seo.updatedAt'
  | 'seo.page___blog_post.seo.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.parent.id'
  | 'seo.page___blog_post.parent.children'
  | 'seo.page___blog_post.children'
  | 'seo.page___blog_post.children.id'
  | 'seo.page___blog_post.children.children'
  | 'seo.page___blog_post.internal.content'
  | 'seo.page___blog_post.internal.contentDigest'
  | 'seo.page___blog_post.internal.description'
  | 'seo.page___blog_post.internal.fieldOwners'
  | 'seo.page___blog_post.internal.ignoreType'
  | 'seo.page___blog_post.internal.mediaType'
  | 'seo.page___blog_post.internal.owner'
  | 'seo.page___blog_post.internal.type'
  | 'seo.spaceId'
  | 'seo.createdAt'
  | 'seo.updatedAt'
  | 'seo.sys.type'
  | 'seo.sys.revision'
  | 'seo.parent.id'
  | 'seo.parent.parent.id'
  | 'seo.parent.parent.children'
  | 'seo.parent.children'
  | 'seo.parent.children.id'
  | 'seo.parent.children.children'
  | 'seo.parent.internal.content'
  | 'seo.parent.internal.contentDigest'
  | 'seo.parent.internal.description'
  | 'seo.parent.internal.fieldOwners'
  | 'seo.parent.internal.ignoreType'
  | 'seo.parent.internal.mediaType'
  | 'seo.parent.internal.owner'
  | 'seo.parent.internal.type'
  | 'seo.children'
  | 'seo.children.id'
  | 'seo.children.parent.id'
  | 'seo.children.parent.children'
  | 'seo.children.children'
  | 'seo.children.children.id'
  | 'seo.children.children.children'
  | 'seo.children.internal.content'
  | 'seo.children.internal.contentDigest'
  | 'seo.children.internal.description'
  | 'seo.children.internal.fieldOwners'
  | 'seo.children.internal.ignoreType'
  | 'seo.children.internal.mediaType'
  | 'seo.children.internal.owner'
  | 'seo.children.internal.type'
  | 'seo.internal.content'
  | 'seo.internal.contentDigest'
  | 'seo.internal.description'
  | 'seo.internal.fieldOwners'
  | 'seo.internal.ignoreType'
  | 'seo.internal.mediaType'
  | 'seo.internal.owner'
  | 'seo.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode'
  | 'childrenContentfulPageBlogPostBodyTextNode.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.body'
  | 'childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.children.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.children.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.children.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.body'
  | 'childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPageBlogPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageBlogPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPageBlogPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageBlogPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPageBlogPostGroupConnection_distinctArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostGroupConnection_maxArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostGroupConnection_minArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostGroupConnection_sumArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageBlogPostFieldsEnum;
};

type ContentfulPageBlogPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPageBlogPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulEntityPersonConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntityPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntityPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntityPersonGroupConnection>;
};


type ContentfulEntityPersonConnection_distinctArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonConnection_maxArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonConnection_minArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonConnection_sumArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntityPersonFieldsEnum;
};

type ContentfulEntityPersonEdge = {
  readonly next: Maybe<ContentfulEntityPerson>;
  readonly node: ContentfulEntityPerson;
  readonly previous: Maybe<ContentfulEntityPerson>;
};

type ContentfulEntityPersonFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'title'
  | 'company'
  | 'email'
  | 'phone'
  | 'twitter'
  | 'github'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'page___blog_post'
  | 'page___blog_post.contentful_id'
  | 'page___blog_post.id'
  | 'page___blog_post.node_locale'
  | 'page___blog_post.title'
  | 'page___blog_post.slug'
  | 'page___blog_post.publishDate'
  | 'page___blog_post.tags'
  | 'page___blog_post.heroImage.contentful_id'
  | 'page___blog_post.heroImage.id'
  | 'page___blog_post.heroImage.spaceId'
  | 'page___blog_post.heroImage.createdAt'
  | 'page___blog_post.heroImage.updatedAt'
  | 'page___blog_post.heroImage.file.url'
  | 'page___blog_post.heroImage.file.fileName'
  | 'page___blog_post.heroImage.file.contentType'
  | 'page___blog_post.heroImage.title'
  | 'page___blog_post.heroImage.description'
  | 'page___blog_post.heroImage.node_locale'
  | 'page___blog_post.heroImage.sys.type'
  | 'page___blog_post.heroImage.sys.revision'
  | 'page___blog_post.heroImage.fixed.base64'
  | 'page___blog_post.heroImage.fixed.tracedSVG'
  | 'page___blog_post.heroImage.fixed.aspectRatio'
  | 'page___blog_post.heroImage.fixed.width'
  | 'page___blog_post.heroImage.fixed.height'
  | 'page___blog_post.heroImage.fixed.src'
  | 'page___blog_post.heroImage.fixed.srcSet'
  | 'page___blog_post.heroImage.fixed.srcWebp'
  | 'page___blog_post.heroImage.fixed.srcSetWebp'
  | 'page___blog_post.heroImage.fluid.base64'
  | 'page___blog_post.heroImage.fluid.tracedSVG'
  | 'page___blog_post.heroImage.fluid.aspectRatio'
  | 'page___blog_post.heroImage.fluid.src'
  | 'page___blog_post.heroImage.fluid.srcSet'
  | 'page___blog_post.heroImage.fluid.srcWebp'
  | 'page___blog_post.heroImage.fluid.srcSetWebp'
  | 'page___blog_post.heroImage.fluid.sizes'
  | 'page___blog_post.heroImage.gatsbyImageData'
  | 'page___blog_post.heroImage.resize.base64'
  | 'page___blog_post.heroImage.resize.tracedSVG'
  | 'page___blog_post.heroImage.resize.src'
  | 'page___blog_post.heroImage.resize.width'
  | 'page___blog_post.heroImage.resize.height'
  | 'page___blog_post.heroImage.resize.aspectRatio'
  | 'page___blog_post.heroImage.parent.id'
  | 'page___blog_post.heroImage.parent.children'
  | 'page___blog_post.heroImage.children'
  | 'page___blog_post.heroImage.children.id'
  | 'page___blog_post.heroImage.children.children'
  | 'page___blog_post.heroImage.internal.content'
  | 'page___blog_post.heroImage.internal.contentDigest'
  | 'page___blog_post.heroImage.internal.description'
  | 'page___blog_post.heroImage.internal.fieldOwners'
  | 'page___blog_post.heroImage.internal.ignoreType'
  | 'page___blog_post.heroImage.internal.mediaType'
  | 'page___blog_post.heroImage.internal.owner'
  | 'page___blog_post.heroImage.internal.type'
  | 'page___blog_post.author.contentful_id'
  | 'page___blog_post.author.id'
  | 'page___blog_post.author.node_locale'
  | 'page___blog_post.author.name'
  | 'page___blog_post.author.title'
  | 'page___blog_post.author.company'
  | 'page___blog_post.author.email'
  | 'page___blog_post.author.phone'
  | 'page___blog_post.author.twitter'
  | 'page___blog_post.author.github'
  | 'page___blog_post.author.image.contentful_id'
  | 'page___blog_post.author.image.id'
  | 'page___blog_post.author.image.spaceId'
  | 'page___blog_post.author.image.createdAt'
  | 'page___blog_post.author.image.updatedAt'
  | 'page___blog_post.author.image.title'
  | 'page___blog_post.author.image.description'
  | 'page___blog_post.author.image.node_locale'
  | 'page___blog_post.author.image.gatsbyImageData'
  | 'page___blog_post.author.image.children'
  | 'page___blog_post.author.page___blog_post'
  | 'page___blog_post.author.page___blog_post.contentful_id'
  | 'page___blog_post.author.page___blog_post.id'
  | 'page___blog_post.author.page___blog_post.node_locale'
  | 'page___blog_post.author.page___blog_post.title'
  | 'page___blog_post.author.page___blog_post.slug'
  | 'page___blog_post.author.page___blog_post.publishDate'
  | 'page___blog_post.author.page___blog_post.tags'
  | 'page___blog_post.author.page___blog_post.spaceId'
  | 'page___blog_post.author.page___blog_post.createdAt'
  | 'page___blog_post.author.page___blog_post.updatedAt'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.author.page___blog_post.children'
  | 'page___blog_post.author.shortBio.id'
  | 'page___blog_post.author.shortBio.children'
  | 'page___blog_post.author.shortBio.shortBio'
  | 'page___blog_post.author.shortBio.childrenMarkdownRemark'
  | 'page___blog_post.author.spaceId'
  | 'page___blog_post.author.createdAt'
  | 'page___blog_post.author.updatedAt'
  | 'page___blog_post.author.sys.type'
  | 'page___blog_post.author.sys.revision'
  | 'page___blog_post.author.facebook'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.parent.id'
  | 'page___blog_post.author.parent.children'
  | 'page___blog_post.author.children'
  | 'page___blog_post.author.children.id'
  | 'page___blog_post.author.children.children'
  | 'page___blog_post.author.internal.content'
  | 'page___blog_post.author.internal.contentDigest'
  | 'page___blog_post.author.internal.description'
  | 'page___blog_post.author.internal.fieldOwners'
  | 'page___blog_post.author.internal.ignoreType'
  | 'page___blog_post.author.internal.mediaType'
  | 'page___blog_post.author.internal.owner'
  | 'page___blog_post.author.internal.type'
  | 'page___blog_post.description.id'
  | 'page___blog_post.description.parent.id'
  | 'page___blog_post.description.parent.children'
  | 'page___blog_post.description.children'
  | 'page___blog_post.description.children.id'
  | 'page___blog_post.description.children.children'
  | 'page___blog_post.description.internal.content'
  | 'page___blog_post.description.internal.contentDigest'
  | 'page___blog_post.description.internal.description'
  | 'page___blog_post.description.internal.fieldOwners'
  | 'page___blog_post.description.internal.ignoreType'
  | 'page___blog_post.description.internal.mediaType'
  | 'page___blog_post.description.internal.owner'
  | 'page___blog_post.description.internal.type'
  | 'page___blog_post.description.description'
  | 'page___blog_post.description.sys.type'
  | 'page___blog_post.description.childrenMarkdownRemark'
  | 'page___blog_post.description.childrenMarkdownRemark.id'
  | 'page___blog_post.description.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childrenMarkdownRemark.html'
  | 'page___blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childrenMarkdownRemark.headings'
  | 'page___blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childrenMarkdownRemark.children'
  | 'page___blog_post.description.childMarkdownRemark.id'
  | 'page___blog_post.description.childMarkdownRemark.excerpt'
  | 'page___blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childMarkdownRemark.html'
  | 'page___blog_post.description.childMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childMarkdownRemark.headings'
  | 'page___blog_post.description.childMarkdownRemark.timeToRead'
  | 'page___blog_post.description.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childMarkdownRemark.children'
  | 'page___blog_post.body.id'
  | 'page___blog_post.body.parent.id'
  | 'page___blog_post.body.parent.children'
  | 'page___blog_post.body.children'
  | 'page___blog_post.body.children.id'
  | 'page___blog_post.body.children.children'
  | 'page___blog_post.body.internal.content'
  | 'page___blog_post.body.internal.contentDigest'
  | 'page___blog_post.body.internal.description'
  | 'page___blog_post.body.internal.fieldOwners'
  | 'page___blog_post.body.internal.ignoreType'
  | 'page___blog_post.body.internal.mediaType'
  | 'page___blog_post.body.internal.owner'
  | 'page___blog_post.body.internal.type'
  | 'page___blog_post.body.body'
  | 'page___blog_post.body.sys.type'
  | 'page___blog_post.body.childrenMarkdownRemark'
  | 'page___blog_post.body.childrenMarkdownRemark.id'
  | 'page___blog_post.body.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childrenMarkdownRemark.html'
  | 'page___blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childrenMarkdownRemark.headings'
  | 'page___blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childrenMarkdownRemark.children'
  | 'page___blog_post.body.childMarkdownRemark.id'
  | 'page___blog_post.body.childMarkdownRemark.excerpt'
  | 'page___blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childMarkdownRemark.html'
  | 'page___blog_post.body.childMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childMarkdownRemark.headings'
  | 'page___blog_post.body.childMarkdownRemark.timeToRead'
  | 'page___blog_post.body.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childMarkdownRemark.children'
  | 'page___blog_post.spaceId'
  | 'page___blog_post.createdAt'
  | 'page___blog_post.updatedAt'
  | 'page___blog_post.sys.type'
  | 'page___blog_post.sys.revision'
  | 'page___blog_post.seo.contentful_id'
  | 'page___blog_post.seo.id'
  | 'page___blog_post.seo.node_locale'
  | 'page___blog_post.seo.title'
  | 'page___blog_post.seo.description'
  | 'page___blog_post.seo.robots'
  | 'page___blog_post.seo.image.contentful_id'
  | 'page___blog_post.seo.image.id'
  | 'page___blog_post.seo.image.spaceId'
  | 'page___blog_post.seo.image.createdAt'
  | 'page___blog_post.seo.image.updatedAt'
  | 'page___blog_post.seo.image.title'
  | 'page___blog_post.seo.image.description'
  | 'page___blog_post.seo.image.node_locale'
  | 'page___blog_post.seo.image.gatsbyImageData'
  | 'page___blog_post.seo.image.children'
  | 'page___blog_post.seo.page___blog_post'
  | 'page___blog_post.seo.page___blog_post.contentful_id'
  | 'page___blog_post.seo.page___blog_post.id'
  | 'page___blog_post.seo.page___blog_post.node_locale'
  | 'page___blog_post.seo.page___blog_post.title'
  | 'page___blog_post.seo.page___blog_post.slug'
  | 'page___blog_post.seo.page___blog_post.publishDate'
  | 'page___blog_post.seo.page___blog_post.tags'
  | 'page___blog_post.seo.page___blog_post.spaceId'
  | 'page___blog_post.seo.page___blog_post.createdAt'
  | 'page___blog_post.seo.page___blog_post.updatedAt'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.seo.page___blog_post.children'
  | 'page___blog_post.seo.spaceId'
  | 'page___blog_post.seo.createdAt'
  | 'page___blog_post.seo.updatedAt'
  | 'page___blog_post.seo.sys.type'
  | 'page___blog_post.seo.sys.revision'
  | 'page___blog_post.seo.parent.id'
  | 'page___blog_post.seo.parent.children'
  | 'page___blog_post.seo.children'
  | 'page___blog_post.seo.children.id'
  | 'page___blog_post.seo.children.children'
  | 'page___blog_post.seo.internal.content'
  | 'page___blog_post.seo.internal.contentDigest'
  | 'page___blog_post.seo.internal.description'
  | 'page___blog_post.seo.internal.fieldOwners'
  | 'page___blog_post.seo.internal.ignoreType'
  | 'page___blog_post.seo.internal.mediaType'
  | 'page___blog_post.seo.internal.owner'
  | 'page___blog_post.seo.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.parent.id'
  | 'page___blog_post.parent.parent.id'
  | 'page___blog_post.parent.parent.children'
  | 'page___blog_post.parent.children'
  | 'page___blog_post.parent.children.id'
  | 'page___blog_post.parent.children.children'
  | 'page___blog_post.parent.internal.content'
  | 'page___blog_post.parent.internal.contentDigest'
  | 'page___blog_post.parent.internal.description'
  | 'page___blog_post.parent.internal.fieldOwners'
  | 'page___blog_post.parent.internal.ignoreType'
  | 'page___blog_post.parent.internal.mediaType'
  | 'page___blog_post.parent.internal.owner'
  | 'page___blog_post.parent.internal.type'
  | 'page___blog_post.children'
  | 'page___blog_post.children.id'
  | 'page___blog_post.children.parent.id'
  | 'page___blog_post.children.parent.children'
  | 'page___blog_post.children.children'
  | 'page___blog_post.children.children.id'
  | 'page___blog_post.children.children.children'
  | 'page___blog_post.children.internal.content'
  | 'page___blog_post.children.internal.contentDigest'
  | 'page___blog_post.children.internal.description'
  | 'page___blog_post.children.internal.fieldOwners'
  | 'page___blog_post.children.internal.ignoreType'
  | 'page___blog_post.children.internal.mediaType'
  | 'page___blog_post.children.internal.owner'
  | 'page___blog_post.children.internal.type'
  | 'page___blog_post.internal.content'
  | 'page___blog_post.internal.contentDigest'
  | 'page___blog_post.internal.description'
  | 'page___blog_post.internal.fieldOwners'
  | 'page___blog_post.internal.ignoreType'
  | 'page___blog_post.internal.mediaType'
  | 'page___blog_post.internal.owner'
  | 'page___blog_post.internal.type'
  | 'shortBio.id'
  | 'shortBio.parent.id'
  | 'shortBio.parent.parent.id'
  | 'shortBio.parent.parent.children'
  | 'shortBio.parent.children'
  | 'shortBio.parent.children.id'
  | 'shortBio.parent.children.children'
  | 'shortBio.parent.internal.content'
  | 'shortBio.parent.internal.contentDigest'
  | 'shortBio.parent.internal.description'
  | 'shortBio.parent.internal.fieldOwners'
  | 'shortBio.parent.internal.ignoreType'
  | 'shortBio.parent.internal.mediaType'
  | 'shortBio.parent.internal.owner'
  | 'shortBio.parent.internal.type'
  | 'shortBio.children'
  | 'shortBio.children.id'
  | 'shortBio.children.parent.id'
  | 'shortBio.children.parent.children'
  | 'shortBio.children.children'
  | 'shortBio.children.children.id'
  | 'shortBio.children.children.children'
  | 'shortBio.children.internal.content'
  | 'shortBio.children.internal.contentDigest'
  | 'shortBio.children.internal.description'
  | 'shortBio.children.internal.fieldOwners'
  | 'shortBio.children.internal.ignoreType'
  | 'shortBio.children.internal.mediaType'
  | 'shortBio.children.internal.owner'
  | 'shortBio.children.internal.type'
  | 'shortBio.internal.content'
  | 'shortBio.internal.contentDigest'
  | 'shortBio.internal.description'
  | 'shortBio.internal.fieldOwners'
  | 'shortBio.internal.ignoreType'
  | 'shortBio.internal.mediaType'
  | 'shortBio.internal.owner'
  | 'shortBio.internal.type'
  | 'shortBio.shortBio'
  | 'shortBio.sys.type'
  | 'shortBio.childrenMarkdownRemark'
  | 'shortBio.childrenMarkdownRemark.id'
  | 'shortBio.childrenMarkdownRemark.frontmatter.title'
  | 'shortBio.childrenMarkdownRemark.excerpt'
  | 'shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childrenMarkdownRemark.html'
  | 'shortBio.childrenMarkdownRemark.htmlAst'
  | 'shortBio.childrenMarkdownRemark.excerptAst'
  | 'shortBio.childrenMarkdownRemark.headings'
  | 'shortBio.childrenMarkdownRemark.headings.id'
  | 'shortBio.childrenMarkdownRemark.headings.value'
  | 'shortBio.childrenMarkdownRemark.headings.depth'
  | 'shortBio.childrenMarkdownRemark.timeToRead'
  | 'shortBio.childrenMarkdownRemark.tableOfContents'
  | 'shortBio.childrenMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childrenMarkdownRemark.wordCount.sentences'
  | 'shortBio.childrenMarkdownRemark.wordCount.words'
  | 'shortBio.childrenMarkdownRemark.parent.id'
  | 'shortBio.childrenMarkdownRemark.parent.children'
  | 'shortBio.childrenMarkdownRemark.children'
  | 'shortBio.childrenMarkdownRemark.children.id'
  | 'shortBio.childrenMarkdownRemark.children.children'
  | 'shortBio.childrenMarkdownRemark.internal.content'
  | 'shortBio.childrenMarkdownRemark.internal.contentDigest'
  | 'shortBio.childrenMarkdownRemark.internal.description'
  | 'shortBio.childrenMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childrenMarkdownRemark.internal.ignoreType'
  | 'shortBio.childrenMarkdownRemark.internal.mediaType'
  | 'shortBio.childrenMarkdownRemark.internal.owner'
  | 'shortBio.childrenMarkdownRemark.internal.type'
  | 'shortBio.childMarkdownRemark.id'
  | 'shortBio.childMarkdownRemark.frontmatter.title'
  | 'shortBio.childMarkdownRemark.excerpt'
  | 'shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childMarkdownRemark.html'
  | 'shortBio.childMarkdownRemark.htmlAst'
  | 'shortBio.childMarkdownRemark.excerptAst'
  | 'shortBio.childMarkdownRemark.headings'
  | 'shortBio.childMarkdownRemark.headings.id'
  | 'shortBio.childMarkdownRemark.headings.value'
  | 'shortBio.childMarkdownRemark.headings.depth'
  | 'shortBio.childMarkdownRemark.timeToRead'
  | 'shortBio.childMarkdownRemark.tableOfContents'
  | 'shortBio.childMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childMarkdownRemark.wordCount.sentences'
  | 'shortBio.childMarkdownRemark.wordCount.words'
  | 'shortBio.childMarkdownRemark.parent.id'
  | 'shortBio.childMarkdownRemark.parent.children'
  | 'shortBio.childMarkdownRemark.children'
  | 'shortBio.childMarkdownRemark.children.id'
  | 'shortBio.childMarkdownRemark.children.children'
  | 'shortBio.childMarkdownRemark.internal.content'
  | 'shortBio.childMarkdownRemark.internal.contentDigest'
  | 'shortBio.childMarkdownRemark.internal.description'
  | 'shortBio.childMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childMarkdownRemark.internal.ignoreType'
  | 'shortBio.childMarkdownRemark.internal.mediaType'
  | 'shortBio.childMarkdownRemark.internal.owner'
  | 'shortBio.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'facebook'
  | 'childrenContentfulEntityPersonShortBioTextNode'
  | 'childrenContentfulEntityPersonShortBioTextNode.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'childrenContentfulEntityPersonShortBioTextNode.sys.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.children.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.children.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.children.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'childContentfulEntityPersonShortBioTextNode.sys.type'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulEntityPersonGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntityPersonEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntityPerson>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulEntityPersonGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulEntityPersonGroupConnection_distinctArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonGroupConnection_maxArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonGroupConnection_minArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonGroupConnection_sumArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntityPersonFieldsEnum;
};

type ContentfulEntityPersonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntityPersonFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPageFlexPageSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPageFlexPageSysContentTypeFilterInput>;
};

type ContentfulPageFlexPageSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPageFlexPageSysContentTypeSysFilterInput>;
};

type ContentfulPageFlexPageSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPageFlexPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageFlexPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPageFlexPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageFlexPageGroupConnection>;
};


type ContentfulPageFlexPageConnection_distinctArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageConnection_maxArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageConnection_minArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageConnection_sumArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageFlexPageFieldsEnum;
};

type ContentfulPageFlexPageEdge = {
  readonly next: Maybe<ContentfulPageFlexPage>;
  readonly node: ContentfulPageFlexPage;
  readonly previous: Maybe<ContentfulPageFlexPage>;
};

type ContentfulPageFlexPageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'slug'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulPageFlexPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPageFlexPageEdge>;
  readonly nodes: ReadonlyArray<ContentfulPageFlexPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulPageFlexPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulPageFlexPageGroupConnection_distinctArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageGroupConnection_maxArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageGroupConnection_minArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageGroupConnection_sumArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPageFlexPageFieldsEnum;
};

type ContentfulPageFlexPageFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPageFlexPageSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulPageFlexPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulSeoConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulSeoEdge>;
  readonly nodes: ReadonlyArray<ContentfulSeo>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulSeoGroupConnection>;
};


type ContentfulSeoConnection_distinctArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoConnection_maxArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoConnection_minArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoConnection_sumArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulSeoFieldsEnum;
};

type ContentfulSeoEdge = {
  readonly next: Maybe<ContentfulSeo>;
  readonly node: ContentfulSeo;
  readonly previous: Maybe<ContentfulSeo>;
};

type ContentfulSeoFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'description'
  | 'robots'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'page___blog_post'
  | 'page___blog_post.contentful_id'
  | 'page___blog_post.id'
  | 'page___blog_post.node_locale'
  | 'page___blog_post.title'
  | 'page___blog_post.slug'
  | 'page___blog_post.publishDate'
  | 'page___blog_post.tags'
  | 'page___blog_post.heroImage.contentful_id'
  | 'page___blog_post.heroImage.id'
  | 'page___blog_post.heroImage.spaceId'
  | 'page___blog_post.heroImage.createdAt'
  | 'page___blog_post.heroImage.updatedAt'
  | 'page___blog_post.heroImage.file.url'
  | 'page___blog_post.heroImage.file.fileName'
  | 'page___blog_post.heroImage.file.contentType'
  | 'page___blog_post.heroImage.title'
  | 'page___blog_post.heroImage.description'
  | 'page___blog_post.heroImage.node_locale'
  | 'page___blog_post.heroImage.sys.type'
  | 'page___blog_post.heroImage.sys.revision'
  | 'page___blog_post.heroImage.fixed.base64'
  | 'page___blog_post.heroImage.fixed.tracedSVG'
  | 'page___blog_post.heroImage.fixed.aspectRatio'
  | 'page___blog_post.heroImage.fixed.width'
  | 'page___blog_post.heroImage.fixed.height'
  | 'page___blog_post.heroImage.fixed.src'
  | 'page___blog_post.heroImage.fixed.srcSet'
  | 'page___blog_post.heroImage.fixed.srcWebp'
  | 'page___blog_post.heroImage.fixed.srcSetWebp'
  | 'page___blog_post.heroImage.fluid.base64'
  | 'page___blog_post.heroImage.fluid.tracedSVG'
  | 'page___blog_post.heroImage.fluid.aspectRatio'
  | 'page___blog_post.heroImage.fluid.src'
  | 'page___blog_post.heroImage.fluid.srcSet'
  | 'page___blog_post.heroImage.fluid.srcWebp'
  | 'page___blog_post.heroImage.fluid.srcSetWebp'
  | 'page___blog_post.heroImage.fluid.sizes'
  | 'page___blog_post.heroImage.gatsbyImageData'
  | 'page___blog_post.heroImage.resize.base64'
  | 'page___blog_post.heroImage.resize.tracedSVG'
  | 'page___blog_post.heroImage.resize.src'
  | 'page___blog_post.heroImage.resize.width'
  | 'page___blog_post.heroImage.resize.height'
  | 'page___blog_post.heroImage.resize.aspectRatio'
  | 'page___blog_post.heroImage.parent.id'
  | 'page___blog_post.heroImage.parent.children'
  | 'page___blog_post.heroImage.children'
  | 'page___blog_post.heroImage.children.id'
  | 'page___blog_post.heroImage.children.children'
  | 'page___blog_post.heroImage.internal.content'
  | 'page___blog_post.heroImage.internal.contentDigest'
  | 'page___blog_post.heroImage.internal.description'
  | 'page___blog_post.heroImage.internal.fieldOwners'
  | 'page___blog_post.heroImage.internal.ignoreType'
  | 'page___blog_post.heroImage.internal.mediaType'
  | 'page___blog_post.heroImage.internal.owner'
  | 'page___blog_post.heroImage.internal.type'
  | 'page___blog_post.author.contentful_id'
  | 'page___blog_post.author.id'
  | 'page___blog_post.author.node_locale'
  | 'page___blog_post.author.name'
  | 'page___blog_post.author.title'
  | 'page___blog_post.author.company'
  | 'page___blog_post.author.email'
  | 'page___blog_post.author.phone'
  | 'page___blog_post.author.twitter'
  | 'page___blog_post.author.github'
  | 'page___blog_post.author.image.contentful_id'
  | 'page___blog_post.author.image.id'
  | 'page___blog_post.author.image.spaceId'
  | 'page___blog_post.author.image.createdAt'
  | 'page___blog_post.author.image.updatedAt'
  | 'page___blog_post.author.image.title'
  | 'page___blog_post.author.image.description'
  | 'page___blog_post.author.image.node_locale'
  | 'page___blog_post.author.image.gatsbyImageData'
  | 'page___blog_post.author.image.children'
  | 'page___blog_post.author.page___blog_post'
  | 'page___blog_post.author.page___blog_post.contentful_id'
  | 'page___blog_post.author.page___blog_post.id'
  | 'page___blog_post.author.page___blog_post.node_locale'
  | 'page___blog_post.author.page___blog_post.title'
  | 'page___blog_post.author.page___blog_post.slug'
  | 'page___blog_post.author.page___blog_post.publishDate'
  | 'page___blog_post.author.page___blog_post.tags'
  | 'page___blog_post.author.page___blog_post.spaceId'
  | 'page___blog_post.author.page___blog_post.createdAt'
  | 'page___blog_post.author.page___blog_post.updatedAt'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.author.page___blog_post.children'
  | 'page___blog_post.author.shortBio.id'
  | 'page___blog_post.author.shortBio.children'
  | 'page___blog_post.author.shortBio.shortBio'
  | 'page___blog_post.author.shortBio.childrenMarkdownRemark'
  | 'page___blog_post.author.spaceId'
  | 'page___blog_post.author.createdAt'
  | 'page___blog_post.author.updatedAt'
  | 'page___blog_post.author.sys.type'
  | 'page___blog_post.author.sys.revision'
  | 'page___blog_post.author.facebook'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.parent.id'
  | 'page___blog_post.author.parent.children'
  | 'page___blog_post.author.children'
  | 'page___blog_post.author.children.id'
  | 'page___blog_post.author.children.children'
  | 'page___blog_post.author.internal.content'
  | 'page___blog_post.author.internal.contentDigest'
  | 'page___blog_post.author.internal.description'
  | 'page___blog_post.author.internal.fieldOwners'
  | 'page___blog_post.author.internal.ignoreType'
  | 'page___blog_post.author.internal.mediaType'
  | 'page___blog_post.author.internal.owner'
  | 'page___blog_post.author.internal.type'
  | 'page___blog_post.description.id'
  | 'page___blog_post.description.parent.id'
  | 'page___blog_post.description.parent.children'
  | 'page___blog_post.description.children'
  | 'page___blog_post.description.children.id'
  | 'page___blog_post.description.children.children'
  | 'page___blog_post.description.internal.content'
  | 'page___blog_post.description.internal.contentDigest'
  | 'page___blog_post.description.internal.description'
  | 'page___blog_post.description.internal.fieldOwners'
  | 'page___blog_post.description.internal.ignoreType'
  | 'page___blog_post.description.internal.mediaType'
  | 'page___blog_post.description.internal.owner'
  | 'page___blog_post.description.internal.type'
  | 'page___blog_post.description.description'
  | 'page___blog_post.description.sys.type'
  | 'page___blog_post.description.childrenMarkdownRemark'
  | 'page___blog_post.description.childrenMarkdownRemark.id'
  | 'page___blog_post.description.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childrenMarkdownRemark.html'
  | 'page___blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childrenMarkdownRemark.headings'
  | 'page___blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childrenMarkdownRemark.children'
  | 'page___blog_post.description.childMarkdownRemark.id'
  | 'page___blog_post.description.childMarkdownRemark.excerpt'
  | 'page___blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childMarkdownRemark.html'
  | 'page___blog_post.description.childMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childMarkdownRemark.headings'
  | 'page___blog_post.description.childMarkdownRemark.timeToRead'
  | 'page___blog_post.description.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childMarkdownRemark.children'
  | 'page___blog_post.body.id'
  | 'page___blog_post.body.parent.id'
  | 'page___blog_post.body.parent.children'
  | 'page___blog_post.body.children'
  | 'page___blog_post.body.children.id'
  | 'page___blog_post.body.children.children'
  | 'page___blog_post.body.internal.content'
  | 'page___blog_post.body.internal.contentDigest'
  | 'page___blog_post.body.internal.description'
  | 'page___blog_post.body.internal.fieldOwners'
  | 'page___blog_post.body.internal.ignoreType'
  | 'page___blog_post.body.internal.mediaType'
  | 'page___blog_post.body.internal.owner'
  | 'page___blog_post.body.internal.type'
  | 'page___blog_post.body.body'
  | 'page___blog_post.body.sys.type'
  | 'page___blog_post.body.childrenMarkdownRemark'
  | 'page___blog_post.body.childrenMarkdownRemark.id'
  | 'page___blog_post.body.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childrenMarkdownRemark.html'
  | 'page___blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childrenMarkdownRemark.headings'
  | 'page___blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childrenMarkdownRemark.children'
  | 'page___blog_post.body.childMarkdownRemark.id'
  | 'page___blog_post.body.childMarkdownRemark.excerpt'
  | 'page___blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childMarkdownRemark.html'
  | 'page___blog_post.body.childMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childMarkdownRemark.headings'
  | 'page___blog_post.body.childMarkdownRemark.timeToRead'
  | 'page___blog_post.body.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childMarkdownRemark.children'
  | 'page___blog_post.spaceId'
  | 'page___blog_post.createdAt'
  | 'page___blog_post.updatedAt'
  | 'page___blog_post.sys.type'
  | 'page___blog_post.sys.revision'
  | 'page___blog_post.seo.contentful_id'
  | 'page___blog_post.seo.id'
  | 'page___blog_post.seo.node_locale'
  | 'page___blog_post.seo.title'
  | 'page___blog_post.seo.description'
  | 'page___blog_post.seo.robots'
  | 'page___blog_post.seo.image.contentful_id'
  | 'page___blog_post.seo.image.id'
  | 'page___blog_post.seo.image.spaceId'
  | 'page___blog_post.seo.image.createdAt'
  | 'page___blog_post.seo.image.updatedAt'
  | 'page___blog_post.seo.image.title'
  | 'page___blog_post.seo.image.description'
  | 'page___blog_post.seo.image.node_locale'
  | 'page___blog_post.seo.image.gatsbyImageData'
  | 'page___blog_post.seo.image.children'
  | 'page___blog_post.seo.page___blog_post'
  | 'page___blog_post.seo.page___blog_post.contentful_id'
  | 'page___blog_post.seo.page___blog_post.id'
  | 'page___blog_post.seo.page___blog_post.node_locale'
  | 'page___blog_post.seo.page___blog_post.title'
  | 'page___blog_post.seo.page___blog_post.slug'
  | 'page___blog_post.seo.page___blog_post.publishDate'
  | 'page___blog_post.seo.page___blog_post.tags'
  | 'page___blog_post.seo.page___blog_post.spaceId'
  | 'page___blog_post.seo.page___blog_post.createdAt'
  | 'page___blog_post.seo.page___blog_post.updatedAt'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.seo.page___blog_post.children'
  | 'page___blog_post.seo.spaceId'
  | 'page___blog_post.seo.createdAt'
  | 'page___blog_post.seo.updatedAt'
  | 'page___blog_post.seo.sys.type'
  | 'page___blog_post.seo.sys.revision'
  | 'page___blog_post.seo.parent.id'
  | 'page___blog_post.seo.parent.children'
  | 'page___blog_post.seo.children'
  | 'page___blog_post.seo.children.id'
  | 'page___blog_post.seo.children.children'
  | 'page___blog_post.seo.internal.content'
  | 'page___blog_post.seo.internal.contentDigest'
  | 'page___blog_post.seo.internal.description'
  | 'page___blog_post.seo.internal.fieldOwners'
  | 'page___blog_post.seo.internal.ignoreType'
  | 'page___blog_post.seo.internal.mediaType'
  | 'page___blog_post.seo.internal.owner'
  | 'page___blog_post.seo.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.parent.id'
  | 'page___blog_post.parent.parent.id'
  | 'page___blog_post.parent.parent.children'
  | 'page___blog_post.parent.children'
  | 'page___blog_post.parent.children.id'
  | 'page___blog_post.parent.children.children'
  | 'page___blog_post.parent.internal.content'
  | 'page___blog_post.parent.internal.contentDigest'
  | 'page___blog_post.parent.internal.description'
  | 'page___blog_post.parent.internal.fieldOwners'
  | 'page___blog_post.parent.internal.ignoreType'
  | 'page___blog_post.parent.internal.mediaType'
  | 'page___blog_post.parent.internal.owner'
  | 'page___blog_post.parent.internal.type'
  | 'page___blog_post.children'
  | 'page___blog_post.children.id'
  | 'page___blog_post.children.parent.id'
  | 'page___blog_post.children.parent.children'
  | 'page___blog_post.children.children'
  | 'page___blog_post.children.children.id'
  | 'page___blog_post.children.children.children'
  | 'page___blog_post.children.internal.content'
  | 'page___blog_post.children.internal.contentDigest'
  | 'page___blog_post.children.internal.description'
  | 'page___blog_post.children.internal.fieldOwners'
  | 'page___blog_post.children.internal.ignoreType'
  | 'page___blog_post.children.internal.mediaType'
  | 'page___blog_post.children.internal.owner'
  | 'page___blog_post.children.internal.type'
  | 'page___blog_post.internal.content'
  | 'page___blog_post.internal.contentDigest'
  | 'page___blog_post.internal.description'
  | 'page___blog_post.internal.fieldOwners'
  | 'page___blog_post.internal.ignoreType'
  | 'page___blog_post.internal.mediaType'
  | 'page___blog_post.internal.owner'
  | 'page___blog_post.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulSeoGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulSeoEdge>;
  readonly nodes: ReadonlyArray<ContentfulSeo>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulSeoGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulSeoGroupConnection_distinctArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoGroupConnection_maxArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoGroupConnection_minArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoGroupConnection_sumArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulSeoFieldsEnum;
};

type ContentfulSeoSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulSeoFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPageFlexPageFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPageFlexPageFilterInput>;
};

type ContentfulComponentHeroSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulComponentHeroSysContentTypeFilterInput>;
};

type ContentfulComponentHeroSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulComponentHeroSysContentTypeSysFilterInput>;
};

type ContentfulComponentHeroSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentHeroConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentHeroEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentHero>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentHeroGroupConnection>;
};


type ContentfulComponentHeroConnection_distinctArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroConnection_maxArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroConnection_minArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroConnection_sumArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentHeroFieldsEnum;
};

type ContentfulComponentHeroEdge = {
  readonly next: Maybe<ContentfulComponentHero>;
  readonly node: ContentfulComponentHero;
  readonly previous: Maybe<ContentfulComponentHero>;
};

type ContentfulComponentHeroFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'content'
  | 'image.contentful_id'
  | 'image.id'
  | 'image.spaceId'
  | 'image.createdAt'
  | 'image.updatedAt'
  | 'image.file.url'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.contentType'
  | 'image.title'
  | 'image.description'
  | 'image.node_locale'
  | 'image.sys.type'
  | 'image.sys.revision'
  | 'image.fixed.base64'
  | 'image.fixed.tracedSVG'
  | 'image.fixed.aspectRatio'
  | 'image.fixed.width'
  | 'image.fixed.height'
  | 'image.fixed.src'
  | 'image.fixed.srcSet'
  | 'image.fixed.srcWebp'
  | 'image.fixed.srcSetWebp'
  | 'image.fluid.base64'
  | 'image.fluid.tracedSVG'
  | 'image.fluid.aspectRatio'
  | 'image.fluid.src'
  | 'image.fluid.srcSet'
  | 'image.fluid.srcWebp'
  | 'image.fluid.srcSetWebp'
  | 'image.fluid.sizes'
  | 'image.gatsbyImageData'
  | 'image.resize.base64'
  | 'image.resize.tracedSVG'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.resize.height'
  | 'image.resize.aspectRatio'
  | 'image.parent.id'
  | 'image.parent.parent.id'
  | 'image.parent.parent.children'
  | 'image.parent.children'
  | 'image.parent.children.id'
  | 'image.parent.children.children'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.children'
  | 'image.children.id'
  | 'image.children.parent.id'
  | 'image.children.parent.children'
  | 'image.children.children'
  | 'image.children.children.id'
  | 'image.children.children.children'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'page___flex_page'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.id'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.updatedAt'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.children'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentHeroGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentHeroEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentHero>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentHeroGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentHeroGroupConnection_distinctArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroGroupConnection_maxArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroGroupConnection_minArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroGroupConnection_sumArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentHeroFieldsEnum;
};

type ContentfulComponentHeroFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulComponentHeroSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentHeroSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentHeroFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLinkFilterListInput = {
  readonly elemMatch: Maybe<ContentfulLinkFilterInput>;
};

type ContentfulLinkFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly component___navigation: Maybe<ContentfulComponentNavigationFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulLinkSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentNavigationFilterListInput = {
  readonly elemMatch: Maybe<ContentfulComponentNavigationFilterInput>;
};

type ContentfulComponentNavigationFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly links: Maybe<ContentfulLinkFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulComponentNavigationSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentNavigationSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulComponentNavigationSysContentTypeFilterInput>;
};

type ContentfulComponentNavigationSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulComponentNavigationSysContentTypeSysFilterInput>;
};

type ContentfulComponentNavigationSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulLinkSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulLinkSysContentTypeFilterInput>;
};

type ContentfulLinkSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

type ContentfulLinkSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentNavigationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentNavigationEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentNavigationGroupConnection>;
};


type ContentfulComponentNavigationConnection_distinctArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationConnection_maxArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationConnection_minArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationConnection_sumArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentNavigationFieldsEnum;
};

type ContentfulComponentNavigationEdge = {
  readonly next: Maybe<ContentfulComponentNavigation>;
  readonly node: ContentfulComponentNavigation;
  readonly previous: Maybe<ContentfulComponentNavigation>;
};

type ContentfulComponentNavigationFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'links'
  | 'links.contentful_id'
  | 'links.id'
  | 'links.node_locale'
  | 'links.href'
  | 'links.text'
  | 'links.component___navigation'
  | 'links.component___navigation.contentful_id'
  | 'links.component___navigation.id'
  | 'links.component___navigation.node_locale'
  | 'links.component___navigation.title'
  | 'links.component___navigation.links'
  | 'links.component___navigation.links.contentful_id'
  | 'links.component___navigation.links.id'
  | 'links.component___navigation.links.node_locale'
  | 'links.component___navigation.links.href'
  | 'links.component___navigation.links.text'
  | 'links.component___navigation.links.component___navigation'
  | 'links.component___navigation.links.spaceId'
  | 'links.component___navigation.links.createdAt'
  | 'links.component___navigation.links.updatedAt'
  | 'links.component___navigation.links.children'
  | 'links.component___navigation.spaceId'
  | 'links.component___navigation.createdAt'
  | 'links.component___navigation.updatedAt'
  | 'links.component___navigation.sys.type'
  | 'links.component___navigation.sys.revision'
  | 'links.component___navigation.parent.id'
  | 'links.component___navigation.parent.children'
  | 'links.component___navigation.children'
  | 'links.component___navigation.children.id'
  | 'links.component___navigation.children.children'
  | 'links.component___navigation.internal.content'
  | 'links.component___navigation.internal.contentDigest'
  | 'links.component___navigation.internal.description'
  | 'links.component___navigation.internal.fieldOwners'
  | 'links.component___navigation.internal.ignoreType'
  | 'links.component___navigation.internal.mediaType'
  | 'links.component___navigation.internal.owner'
  | 'links.component___navigation.internal.type'
  | 'links.spaceId'
  | 'links.createdAt'
  | 'links.updatedAt'
  | 'links.sys.type'
  | 'links.sys.revision'
  | 'links.parent.id'
  | 'links.parent.parent.id'
  | 'links.parent.parent.children'
  | 'links.parent.children'
  | 'links.parent.children.id'
  | 'links.parent.children.children'
  | 'links.parent.internal.content'
  | 'links.parent.internal.contentDigest'
  | 'links.parent.internal.description'
  | 'links.parent.internal.fieldOwners'
  | 'links.parent.internal.ignoreType'
  | 'links.parent.internal.mediaType'
  | 'links.parent.internal.owner'
  | 'links.parent.internal.type'
  | 'links.children'
  | 'links.children.id'
  | 'links.children.parent.id'
  | 'links.children.parent.children'
  | 'links.children.children'
  | 'links.children.children.id'
  | 'links.children.children.children'
  | 'links.children.internal.content'
  | 'links.children.internal.contentDigest'
  | 'links.children.internal.description'
  | 'links.children.internal.fieldOwners'
  | 'links.children.internal.ignoreType'
  | 'links.children.internal.mediaType'
  | 'links.children.internal.owner'
  | 'links.children.internal.type'
  | 'links.internal.content'
  | 'links.internal.contentDigest'
  | 'links.internal.description'
  | 'links.internal.fieldOwners'
  | 'links.internal.ignoreType'
  | 'links.internal.mediaType'
  | 'links.internal.owner'
  | 'links.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentNavigationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentNavigationEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentNavigationGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentNavigationGroupConnection_distinctArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationGroupConnection_maxArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationGroupConnection_minArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationGroupConnection_sumArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentNavigationFieldsEnum;
};

type ContentfulComponentNavigationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentNavigationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulLinkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLinkEdge>;
  readonly nodes: ReadonlyArray<ContentfulLink>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLinkGroupConnection>;
};


type ContentfulLinkConnection_distinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkConnection_maxArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkConnection_minArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkConnection_sumArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

type ContentfulLinkEdge = {
  readonly next: Maybe<ContentfulLink>;
  readonly node: ContentfulLink;
  readonly previous: Maybe<ContentfulLink>;
};

type ContentfulLinkFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'href'
  | 'text'
  | 'component___navigation'
  | 'component___navigation.contentful_id'
  | 'component___navigation.id'
  | 'component___navigation.node_locale'
  | 'component___navigation.title'
  | 'component___navigation.links'
  | 'component___navigation.links.contentful_id'
  | 'component___navigation.links.id'
  | 'component___navigation.links.node_locale'
  | 'component___navigation.links.href'
  | 'component___navigation.links.text'
  | 'component___navigation.links.component___navigation'
  | 'component___navigation.links.component___navigation.contentful_id'
  | 'component___navigation.links.component___navigation.id'
  | 'component___navigation.links.component___navigation.node_locale'
  | 'component___navigation.links.component___navigation.title'
  | 'component___navigation.links.component___navigation.links'
  | 'component___navigation.links.component___navigation.spaceId'
  | 'component___navigation.links.component___navigation.createdAt'
  | 'component___navigation.links.component___navigation.updatedAt'
  | 'component___navigation.links.component___navigation.children'
  | 'component___navigation.links.spaceId'
  | 'component___navigation.links.createdAt'
  | 'component___navigation.links.updatedAt'
  | 'component___navigation.links.sys.type'
  | 'component___navigation.links.sys.revision'
  | 'component___navigation.links.parent.id'
  | 'component___navigation.links.parent.children'
  | 'component___navigation.links.children'
  | 'component___navigation.links.children.id'
  | 'component___navigation.links.children.children'
  | 'component___navigation.links.internal.content'
  | 'component___navigation.links.internal.contentDigest'
  | 'component___navigation.links.internal.description'
  | 'component___navigation.links.internal.fieldOwners'
  | 'component___navigation.links.internal.ignoreType'
  | 'component___navigation.links.internal.mediaType'
  | 'component___navigation.links.internal.owner'
  | 'component___navigation.links.internal.type'
  | 'component___navigation.spaceId'
  | 'component___navigation.createdAt'
  | 'component___navigation.updatedAt'
  | 'component___navigation.sys.type'
  | 'component___navigation.sys.revision'
  | 'component___navigation.parent.id'
  | 'component___navigation.parent.parent.id'
  | 'component___navigation.parent.parent.children'
  | 'component___navigation.parent.children'
  | 'component___navigation.parent.children.id'
  | 'component___navigation.parent.children.children'
  | 'component___navigation.parent.internal.content'
  | 'component___navigation.parent.internal.contentDigest'
  | 'component___navigation.parent.internal.description'
  | 'component___navigation.parent.internal.fieldOwners'
  | 'component___navigation.parent.internal.ignoreType'
  | 'component___navigation.parent.internal.mediaType'
  | 'component___navigation.parent.internal.owner'
  | 'component___navigation.parent.internal.type'
  | 'component___navigation.children'
  | 'component___navigation.children.id'
  | 'component___navigation.children.parent.id'
  | 'component___navigation.children.parent.children'
  | 'component___navigation.children.children'
  | 'component___navigation.children.children.id'
  | 'component___navigation.children.children.children'
  | 'component___navigation.children.internal.content'
  | 'component___navigation.children.internal.contentDigest'
  | 'component___navigation.children.internal.description'
  | 'component___navigation.children.internal.fieldOwners'
  | 'component___navigation.children.internal.ignoreType'
  | 'component___navigation.children.internal.mediaType'
  | 'component___navigation.children.internal.owner'
  | 'component___navigation.children.internal.type'
  | 'component___navigation.internal.content'
  | 'component___navigation.internal.contentDigest'
  | 'component___navigation.internal.description'
  | 'component___navigation.internal.fieldOwners'
  | 'component___navigation.internal.ignoreType'
  | 'component___navigation.internal.mediaType'
  | 'component___navigation.internal.owner'
  | 'component___navigation.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulLinkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulLinkEdge>;
  readonly nodes: ReadonlyArray<ContentfulLink>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulLinkGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulLinkGroupConnection_distinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkGroupConnection_maxArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkGroupConnection_minArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkGroupConnection_sumArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulLinkFieldsEnum;
};

type ContentfulLinkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulLinkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulComponentFooterContentFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentFooterSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulComponentFooterSysContentTypeFilterInput>;
};

type ContentfulComponentFooterSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulComponentFooterSysContentTypeSysFilterInput>;
};

type ContentfulComponentFooterSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentFooterConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentFooterEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentFooter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentFooterGroupConnection>;
};


type ContentfulComponentFooterConnection_distinctArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterConnection_maxArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterConnection_minArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterConnection_sumArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentFooterFieldsEnum;
};

type ContentfulComponentFooterEdge = {
  readonly next: Maybe<ContentfulComponentFooter>;
  readonly node: ContentfulComponentFooter;
  readonly previous: Maybe<ContentfulComponentFooter>;
};

type ContentfulComponentFooterFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'content.raw'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentFooterGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentFooterEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentFooter>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentFooterGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentFooterGroupConnection_distinctArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterGroupConnection_maxArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterGroupConnection_minArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterGroupConnection_sumArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentFooterFieldsEnum;
};

type ContentfulComponentFooterFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<ContentfulComponentFooterContentFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulComponentFooterSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentFooterSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentFooterFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulComponentParagraphContentFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentParagraphSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulComponentParagraphSysContentTypeFilterInput>;
};

type ContentfulComponentParagraphSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulComponentParagraphSysContentTypeSysFilterInput>;
};

type ContentfulComponentParagraphSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentParagraphConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentParagraphEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentParagraph>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentParagraphGroupConnection>;
};


type ContentfulComponentParagraphConnection_distinctArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphConnection_maxArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphConnection_minArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphConnection_sumArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentParagraphFieldsEnum;
};

type ContentfulComponentParagraphEdge = {
  readonly next: Maybe<ContentfulComponentParagraph>;
  readonly node: ContentfulComponentParagraph;
  readonly previous: Maybe<ContentfulComponentParagraph>;
};

type ContentfulComponentParagraphFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'content.raw'
  | 'page___flex_page'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.id'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.updatedAt'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.children'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentParagraphGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentParagraphEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentParagraph>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentParagraphGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentParagraphGroupConnection_distinctArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphGroupConnection_maxArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphGroupConnection_minArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphGroupConnection_sumArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentParagraphFieldsEnum;
};

type ContentfulComponentParagraphFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<ContentfulComponentParagraphContentFilterInput>;
  readonly page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulComponentParagraphSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentParagraphSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentParagraphFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulComponentCalloutBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulComponentCalloutBodyTextNodeSysFilterInput>;
  readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulComponentCalloutBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulComponentCalloutSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulComponentCalloutSysContentTypeFilterInput>;
};

type ContentfulComponentCalloutSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulComponentCalloutSysContentTypeSysFilterInput>;
};

type ContentfulComponentCalloutSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type contentfulComponentCalloutBodyTextNodeFilterListInput = {
  readonly elemMatch: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
};

type ContentfulComponentCalloutConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentCalloutEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentCallout>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentCalloutGroupConnection>;
};


type ContentfulComponentCalloutConnection_distinctArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutConnection_maxArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutConnection_minArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutConnection_sumArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentCalloutFieldsEnum;
};

type ContentfulComponentCalloutEdge = {
  readonly next: Maybe<ContentfulComponentCallout>;
  readonly node: ContentfulComponentCallout;
  readonly previous: Maybe<ContentfulComponentCallout>;
};

type ContentfulComponentCalloutFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'heading'
  | 'page___flex_page'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.id'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.updatedAt'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.children'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'body.id'
  | 'body.parent.id'
  | 'body.parent.parent.id'
  | 'body.parent.parent.children'
  | 'body.parent.children'
  | 'body.parent.children.id'
  | 'body.parent.children.children'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.children'
  | 'body.children.id'
  | 'body.children.parent.id'
  | 'body.children.parent.children'
  | 'body.children.children'
  | 'body.children.children.id'
  | 'body.children.children.children'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.body'
  | 'body.sys.type'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys.type'
  | 'sys.revision'
  | 'sys.contentType.sys.type'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.id'
  | 'childrenContentfulComponentCalloutBodyTextNode'
  | 'childrenContentfulComponentCalloutBodyTextNode.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.body'
  | 'childrenContentfulComponentCalloutBodyTextNode.sys.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.children.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.children.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.children.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.body'
  | 'childContentfulComponentCalloutBodyTextNode.sys.type'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.type'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentCalloutGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentCalloutEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentCallout>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentCalloutGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentCalloutGroupConnection_distinctArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutGroupConnection_maxArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutGroupConnection_minArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutGroupConnection_sumArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentCalloutFieldsEnum;
};

type ContentfulComponentCalloutFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly heading: Maybe<StringQueryOperatorInput>;
  readonly page___flex_page: Maybe<ContentfulPageFlexPageFilterListInput>;
  readonly body: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulComponentCalloutSysFilterInput>;
  readonly childrenContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNodeFilterListInput>;
  readonly childContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentCalloutSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentCalloutFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulComponentCarouselConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentCarouselEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentCarousel>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentCarouselGroupConnection>;
};


type ContentfulComponentCarouselConnection_distinctArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselConnection_maxArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselConnection_minArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselConnection_sumArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentCarouselFieldsEnum;
};

type ContentfulComponentCarouselEdge = {
  readonly next: Maybe<ContentfulComponentCarousel>;
  readonly node: ContentfulComponentCarousel;
  readonly previous: Maybe<ContentfulComponentCarousel>;
};

type ContentfulComponentCarouselFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ContentfulComponentCarouselGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulComponentCarouselEdge>;
  readonly nodes: ReadonlyArray<ContentfulComponentCarousel>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulComponentCarouselGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulComponentCarouselGroupConnection_distinctArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselGroupConnection_maxArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselGroupConnection_minArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselGroupConnection_sumArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulComponentCarouselFieldsEnum;
};

type ContentfulComponentCarouselFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulComponentCarouselSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulComponentCarouselFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageBlogPostDescriptionTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeGroupConnection>;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_maxArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_minArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_sumArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulPageBlogPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly node: contentfulPageBlogPostDescriptionTextNode;
  readonly previous: Maybe<contentfulPageBlogPostDescriptionTextNode>;
};

type contentfulPageBlogPostDescriptionTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'description'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulPageBlogPostDescriptionTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_maxArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_minArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_sumArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};

type contentfulPageBlogPostDescriptionTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPageBlogPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostBodyTextNodeGroupConnection>;
};


type contentfulPageBlogPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeConnection_maxArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeConnection_minArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeConnection_sumArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};

type contentfulPageBlogPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly node: contentfulPageBlogPostBodyTextNode;
  readonly previous: Maybe<contentfulPageBlogPostBodyTextNode>;
};

type contentfulPageBlogPostBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulPageBlogPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPageBlogPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_minArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};

type contentfulPageBlogPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulEntityPersonShortBioTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulEntityPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulEntityPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulEntityPersonShortBioTextNodeGroupConnection>;
};


type contentfulEntityPersonShortBioTextNodeConnection_distinctArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeConnection_maxArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeConnection_minArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeConnection_sumArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};

type contentfulEntityPersonShortBioTextNodeEdge = {
  readonly next: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly node: contentfulEntityPersonShortBioTextNode;
  readonly previous: Maybe<contentfulEntityPersonShortBioTextNode>;
};

type contentfulEntityPersonShortBioTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'shortBio'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulEntityPersonShortBioTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulEntityPersonShortBioTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulEntityPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulEntityPersonShortBioTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_distinctArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_maxArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_minArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_sumArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};

type contentfulEntityPersonShortBioTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulEntityPersonShortBioTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulComponentCalloutBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulComponentCalloutBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulComponentCalloutBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulComponentCalloutBodyTextNodeGroupConnection>;
};


type contentfulComponentCalloutBodyTextNodeConnection_distinctArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeConnection_maxArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeConnection_minArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeConnection_sumArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};

type contentfulComponentCalloutBodyTextNodeEdge = {
  readonly next: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly node: contentfulComponentCalloutBodyTextNode;
  readonly previous: Maybe<contentfulComponentCalloutBodyTextNode>;
};

type contentfulComponentCalloutBodyTextNodeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'body'
  | 'sys.type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type';

type contentfulComponentCalloutBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulComponentCalloutBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulComponentCalloutBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<contentfulComponentCalloutBodyTextNodeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_maxArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_minArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_sumArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};

type contentfulComponentCalloutBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulComponentCalloutBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys.type';

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_maxArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_minArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_sumArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: Maybe<Scalars['String']>;
  nextPostSlug: Maybe<Scalars['String']>;
}>;


type BlogPostBySlugQuery = { readonly contentfulPageBlogPost: Maybe<(
    Pick<ContentfulPageBlogPost, 'slug' | 'title' | 'publishDate' | 'tags'>
    & { rawDate: ContentfulPageBlogPost['publishDate'] }
    & { readonly author: Maybe<Pick<ContentfulEntityPerson, 'name'>>, readonly heroImage: Maybe<(
      Pick<ContentfulAsset, 'gatsbyImageData'>
      & { readonly resize: Maybe<Pick<ContentfulResize, 'src'>> }
    )>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'timeToRead'>> }>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt'>> }> }
  )>, readonly previous: Maybe<Pick<ContentfulPageBlogPost, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulPageBlogPost, 'slug' | 'title'>> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type BlogIndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BlogIndexQueryQuery = { readonly allContentfulPageBlogPost: { readonly nodes: ReadonlyArray<(
      Pick<ContentfulPageBlogPost, 'title' | 'slug' | 'publishDate' | 'tags'>
      & { readonly heroImage: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }> }
    )> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type BadBlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: Maybe<Scalars['String']>;
  nextPostSlug: Maybe<Scalars['String']>;
}>;


type BadBlogPostBySlugQuery = { readonly contentfulPageBlogPost: Maybe<(
    Pick<ContentfulPageBlogPost, 'slug' | 'title' | 'publishDate' | 'tags'>
    & { rawDate: ContentfulPageBlogPost['publishDate'] }
    & { readonly author: Maybe<Pick<ContentfulEntityPerson, 'name'>>, readonly heroImage: Maybe<{ readonly resize: Maybe<Pick<ContentfulResize, 'src'>>, readonly file: Maybe<Pick<ContentfulAssetFile, 'url'>> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html' | 'timeToRead'>> }>, readonly description: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt'>> }> }
  )>, readonly previous: Maybe<Pick<ContentfulPageBlogPost, 'slug' | 'title'>>, readonly next: Maybe<Pick<ContentfulPageBlogPost, 'slug' | 'title'>> };

}