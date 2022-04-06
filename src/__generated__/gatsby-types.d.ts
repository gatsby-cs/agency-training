/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | undefined;
type InputMaybe<T> = T | undefined;
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
  JSON: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type Brewery = Node & {
  readonly brewery_type: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly city: Maybe<Scalars['String']>;
  readonly country: Maybe<Scalars['String']>;
  readonly created_at: Maybe<Scalars['Date']>;
  readonly hero: Maybe<ContentfulComponentHero>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly latitude: Maybe<Scalars['String']>;
  readonly longitude: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly phone: Maybe<Scalars['String']>;
  readonly postal_code: Maybe<Scalars['String']>;
  readonly state: Maybe<Scalars['String']>;
  readonly street: Maybe<Scalars['String']>;
  readonly updated_at: Maybe<Scalars['Date']>;
  readonly website_url: Maybe<Scalars['String']>;
};


type Brewery_created_atArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Brewery_updated_atArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type BreweryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<BreweryEdge>;
  readonly group: ReadonlyArray<BreweryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Brewery>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type BreweryConnection_distinctArgs = {
  field: BreweryFieldsEnum;
};


type BreweryConnection_groupArgs = {
  field: BreweryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type BreweryConnection_maxArgs = {
  field: BreweryFieldsEnum;
};


type BreweryConnection_minArgs = {
  field: BreweryFieldsEnum;
};


type BreweryConnection_sumArgs = {
  field: BreweryFieldsEnum;
};

type BreweryEdge = {
  readonly next: Maybe<Brewery>;
  readonly node: Brewery;
  readonly previous: Maybe<Brewery>;
};

type BreweryFieldsEnum =
  | 'brewery_type'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'city'
  | 'country'
  | 'created_at'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'latitude'
  | 'longitude'
  | 'name'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'phone'
  | 'postal_code'
  | 'state'
  | 'street'
  | 'updated_at'
  | 'website_url';

type BreweryFilterInput = {
  readonly brewery_type: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly city: InputMaybe<StringQueryOperatorInput>;
  readonly country: InputMaybe<StringQueryOperatorInput>;
  readonly created_at: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly latitude: InputMaybe<StringQueryOperatorInput>;
  readonly longitude: InputMaybe<StringQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly phone: InputMaybe<StringQueryOperatorInput>;
  readonly postal_code: InputMaybe<StringQueryOperatorInput>;
  readonly state: InputMaybe<StringQueryOperatorInput>;
  readonly street: InputMaybe<StringQueryOperatorInput>;
  readonly updated_at: InputMaybe<DateQueryOperatorInput>;
  readonly website_url: InputMaybe<StringQueryOperatorInput>;
};

type BreweryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<BreweryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<BreweryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Brewery>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type BreweryGroupConnection_distinctArgs = {
  field: BreweryFieldsEnum;
};


type BreweryGroupConnection_groupArgs = {
  field: BreweryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type BreweryGroupConnection_maxArgs = {
  field: BreweryFieldsEnum;
};


type BreweryGroupConnection_minArgs = {
  field: BreweryFieldsEnum;
};


type BreweryGroupConnection_sumArgs = {
  field: BreweryFieldsEnum;
};

type BrewerySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<BreweryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulAsset = ContentfulReference & Node & RemoteFile & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['JSON']>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly mimeType: Scalars['String'];
  readonly node_locale: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly placeholderUrl: Maybe<Scalars['String']>;
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly url: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};


type ContentfulAsset_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulAsset_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cornerRadius?: InputMaybe<Scalars['Int']>;
  cropFocus: InputMaybe<ContentfulImageCropFocus>;
  formats?: InputMaybe<ReadonlyArray<InputMaybe<GatsbyImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<GatsbyImagePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  resizingBehavior: InputMaybe<ImageResizingBehavior>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ContentfulAsset_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulAssetConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

type ContentfulAssetFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'description'
  | 'file.contentType'
  | 'file.details.image.height'
  | 'file.details.image.width'
  | 'file.details.size'
  | 'file.fileName'
  | 'file.url'
  | 'filename'
  | 'filesize'
  | 'gatsbyImage'
  | 'gatsbyImageData'
  | 'height'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mimeType'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'placeholderUrl'
  | 'publicUrl'
  | 'resize.height'
  | 'resize.src'
  | 'resize.width'
  | 'spaceId'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt'
  | 'url'
  | 'width';

type ContentfulAssetFile = {
  readonly contentType: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
  readonly size: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly image: InputMaybe<ContentfulAssetFileDetailsImageFilterInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly height: Maybe<Scalars['Int']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileFilterInput = {
  readonly contentType: InputMaybe<StringQueryOperatorInput>;
  readonly details: InputMaybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulAssetFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly file: InputMaybe<ContentfulAssetFileFilterInput>;
  readonly filename: InputMaybe<StringQueryOperatorInput>;
  readonly filesize: InputMaybe<IntQueryOperatorInput>;
  readonly gatsbyImage: InputMaybe<JSONQueryOperatorInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mimeType: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  readonly publicUrl: InputMaybe<StringQueryOperatorInput>;
  readonly resize: InputMaybe<RemoteFileResizeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulAssetSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ContentfulAssetGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulAssetGroupConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetGroupConnection_groupArgs = {
  field: ContentfulAssetFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulAssetSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulAssetFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulAssetSys = {
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulAssetSysFilterInput = {
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentCallout = ContentfulEntry & ContentfulReference & Node & {
  readonly body: Maybe<contentfulComponentCalloutBodyTextNode>;
  /** Returns the first child node of type contentfulComponentCalloutBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulComponentCalloutBodyTextNode */
  readonly childrenContentfulComponentCalloutBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulComponentCalloutBodyTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly heading: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulComponentCalloutSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulComponentCallout_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulComponentCallout_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulComponentCalloutConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentCalloutEdge>;
  readonly group: ReadonlyArray<ContentfulComponentCalloutGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentCallout>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentCalloutConnection_distinctArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutConnection_groupArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentCalloutContentfulComponentHeroContentfulComponentParagraphUnion = ContentfulComponentCallout | ContentfulComponentHero | ContentfulComponentParagraph;

type ContentfulComponentCalloutEdge = {
  readonly next: Maybe<ContentfulComponentCallout>;
  readonly node: ContentfulComponentCallout;
  readonly previous: Maybe<ContentfulComponentCallout>;
};

type ContentfulComponentCalloutFieldsEnum =
  | 'body.body'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.children'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.children.children'
  | 'body.children.children.children'
  | 'body.children.children.id'
  | 'body.children.id'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.children.parent.children'
  | 'body.children.parent.id'
  | 'body.id'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.parent.children'
  | 'body.parent.children.children'
  | 'body.parent.children.id'
  | 'body.parent.id'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.parent.parent.children'
  | 'body.parent.parent.id'
  | 'body.sys.type'
  | 'childContentfulComponentCalloutBodyTextNode.body'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulComponentCalloutBodyTextNode.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulComponentCalloutBodyTextNode.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.children.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.children.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.children.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.id'
  | 'childContentfulComponentCalloutBodyTextNode.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.children.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.content'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.description'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.mediaType'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.owner'
  | 'childContentfulComponentCalloutBodyTextNode.parent.internal.type'
  | 'childContentfulComponentCalloutBodyTextNode.parent.parent.children'
  | 'childContentfulComponentCalloutBodyTextNode.parent.parent.id'
  | 'childContentfulComponentCalloutBodyTextNode.sys.type'
  | 'children'
  | 'childrenContentfulComponentCalloutBodyTextNode'
  | 'childrenContentfulComponentCalloutBodyTextNode.body'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulComponentCalloutBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulComponentCalloutBodyTextNode.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulComponentCalloutBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.children.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.children.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.content'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.description'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.owner'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.internal.type'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.parent.children'
  | 'childrenContentfulComponentCalloutBodyTextNode.parent.parent.id'
  | 'childrenContentfulComponentCalloutBodyTextNode.sys.type'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'heading'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'page___flex_page'
  | 'page___flex_page.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.id'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.updatedAt'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'updatedAt';

type ContentfulComponentCalloutFilterInput = {
  readonly body: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  readonly childContentfulComponentCalloutBodyTextNode: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulComponentCalloutBodyTextNode: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly heading: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulComponentCalloutSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulComponentCalloutGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentCalloutEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentCalloutGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentCallout>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentCalloutGroupConnection_distinctArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
};


type ContentfulComponentCalloutGroupConnection_groupArgs = {
  field: ContentfulComponentCalloutFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentCalloutSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentCalloutFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentCalloutSys = {
  readonly contentType: Maybe<ContentfulComponentCalloutSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentCalloutSysContentType = {
  readonly sys: Maybe<ContentfulComponentCalloutSysContentTypeSys>;
};

type ContentfulComponentCalloutSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulComponentCalloutSysContentTypeSysFilterInput>;
};

type ContentfulComponentCalloutSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentCalloutSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentCalloutSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulComponentCalloutSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentCarousel = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
};

type ContentfulComponentCarouselConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentCarouselEdge>;
  readonly group: ReadonlyArray<ContentfulComponentCarouselGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentCarousel>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentCarouselConnection_distinctArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselConnection_groupArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentCarouselEdge = {
  readonly next: Maybe<ContentfulComponentCarousel>;
  readonly node: ContentfulComponentCarousel;
  readonly previous: Maybe<ContentfulComponentCarousel>;
};

type ContentfulComponentCarouselFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type ContentfulComponentCarouselFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type ContentfulComponentCarouselGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentCarouselEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentCarouselGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentCarousel>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentCarouselGroupConnection_distinctArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
};


type ContentfulComponentCarouselGroupConnection_groupArgs = {
  field: ContentfulComponentCarouselFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentCarouselSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentCarouselFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentFooter = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<ContentfulComponentFooterContent>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulComponentFooterSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulComponentFooter_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulComponentFooter_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulComponentFooterConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentFooterEdge>;
  readonly group: ReadonlyArray<ContentfulComponentFooterGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentFooter>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentFooterConnection_distinctArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterConnection_groupArgs = {
  field: ContentfulComponentFooterFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentFooterContent = {
  readonly raw: Maybe<Scalars['String']>;
};

type ContentfulComponentFooterContentFilterInput = {
  readonly raw: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentFooterEdge = {
  readonly next: Maybe<ContentfulComponentFooter>;
  readonly node: ContentfulComponentFooter;
  readonly previous: Maybe<ContentfulComponentFooter>;
};

type ContentfulComponentFooterFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'content.raw'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt';

type ContentfulComponentFooterFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<ContentfulComponentFooterContentFilterInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulComponentFooterSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulComponentFooterGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentFooterEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentFooterGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentFooter>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentFooterGroupConnection_distinctArgs = {
  field: ContentfulComponentFooterFieldsEnum;
};


type ContentfulComponentFooterGroupConnection_groupArgs = {
  field: ContentfulComponentFooterFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentFooterSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentFooterFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentFooterSys = {
  readonly contentType: Maybe<ContentfulComponentFooterSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentFooterSysContentType = {
  readonly sys: Maybe<ContentfulComponentFooterSysContentTypeSys>;
};

type ContentfulComponentFooterSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulComponentFooterSysContentTypeSysFilterInput>;
};

type ContentfulComponentFooterSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentFooterSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentFooterSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulComponentFooterSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentHero = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<Scalars['String']>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulComponentHeroSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulComponentHero_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulComponentHero_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulComponentHeroConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentHeroEdge>;
  readonly group: ReadonlyArray<ContentfulComponentHeroGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentHero>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentHeroConnection_distinctArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroConnection_groupArgs = {
  field: ContentfulComponentHeroFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentHeroEdge = {
  readonly next: Maybe<ContentfulComponentHero>;
  readonly node: ContentfulComponentHero;
  readonly previous: Maybe<ContentfulComponentHero>;
};

type ContentfulComponentHeroFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'content'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'image.children'
  | 'image.children.children'
  | 'image.children.children.children'
  | 'image.children.children.id'
  | 'image.children.id'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.children.parent.children'
  | 'image.children.parent.id'
  | 'image.contentful_id'
  | 'image.createdAt'
  | 'image.description'
  | 'image.file.contentType'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.url'
  | 'image.filename'
  | 'image.filesize'
  | 'image.gatsbyImage'
  | 'image.gatsbyImageData'
  | 'image.height'
  | 'image.id'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'image.mimeType'
  | 'image.node_locale'
  | 'image.parent.children'
  | 'image.parent.children.children'
  | 'image.parent.children.id'
  | 'image.parent.id'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.parent.parent.children'
  | 'image.parent.parent.id'
  | 'image.placeholderUrl'
  | 'image.publicUrl'
  | 'image.resize.height'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.spaceId'
  | 'image.sys.revision'
  | 'image.sys.type'
  | 'image.title'
  | 'image.updatedAt'
  | 'image.url'
  | 'image.width'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'page___flex_page'
  | 'page___flex_page.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.id'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.updatedAt'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt';

type ContentfulComponentHeroFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulComponentHeroSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulComponentHeroGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentHeroEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentHeroGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentHero>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentHeroGroupConnection_distinctArgs = {
  field: ContentfulComponentHeroFieldsEnum;
};


type ContentfulComponentHeroGroupConnection_groupArgs = {
  field: ContentfulComponentHeroFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentHeroSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentHeroFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentHeroSys = {
  readonly contentType: Maybe<ContentfulComponentHeroSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentHeroSysContentType = {
  readonly sys: Maybe<ContentfulComponentHeroSysContentTypeSys>;
};

type ContentfulComponentHeroSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulComponentHeroSysContentTypeSysFilterInput>;
};

type ContentfulComponentHeroSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentHeroSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentHeroSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulComponentHeroSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentNavigation = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly links: Maybe<ReadonlyArray<Maybe<ContentfulLink>>>;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulComponentNavigationSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulComponentNavigation_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulComponentNavigation_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulComponentNavigationConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentNavigationEdge>;
  readonly group: ReadonlyArray<ContentfulComponentNavigationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentNavigation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentNavigationConnection_distinctArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationConnection_groupArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentNavigationEdge = {
  readonly next: Maybe<ContentfulComponentNavigation>;
  readonly node: ContentfulComponentNavigation;
  readonly previous: Maybe<ContentfulComponentNavigation>;
};

type ContentfulComponentNavigationFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'links'
  | 'links.children'
  | 'links.children.children'
  | 'links.children.children.children'
  | 'links.children.children.id'
  | 'links.children.id'
  | 'links.children.internal.content'
  | 'links.children.internal.contentDigest'
  | 'links.children.internal.description'
  | 'links.children.internal.fieldOwners'
  | 'links.children.internal.ignoreType'
  | 'links.children.internal.mediaType'
  | 'links.children.internal.owner'
  | 'links.children.internal.type'
  | 'links.children.parent.children'
  | 'links.children.parent.id'
  | 'links.component___navigation'
  | 'links.component___navigation.children'
  | 'links.component___navigation.children.children'
  | 'links.component___navigation.children.id'
  | 'links.component___navigation.contentful_id'
  | 'links.component___navigation.createdAt'
  | 'links.component___navigation.id'
  | 'links.component___navigation.internal.content'
  | 'links.component___navigation.internal.contentDigest'
  | 'links.component___navigation.internal.description'
  | 'links.component___navigation.internal.fieldOwners'
  | 'links.component___navigation.internal.ignoreType'
  | 'links.component___navigation.internal.mediaType'
  | 'links.component___navigation.internal.owner'
  | 'links.component___navigation.internal.type'
  | 'links.component___navigation.links'
  | 'links.component___navigation.links.children'
  | 'links.component___navigation.links.component___navigation'
  | 'links.component___navigation.links.contentful_id'
  | 'links.component___navigation.links.createdAt'
  | 'links.component___navigation.links.href'
  | 'links.component___navigation.links.id'
  | 'links.component___navigation.links.node_locale'
  | 'links.component___navigation.links.spaceId'
  | 'links.component___navigation.links.text'
  | 'links.component___navigation.links.updatedAt'
  | 'links.component___navigation.node_locale'
  | 'links.component___navigation.parent.children'
  | 'links.component___navigation.parent.id'
  | 'links.component___navigation.spaceId'
  | 'links.component___navigation.sys.revision'
  | 'links.component___navigation.sys.type'
  | 'links.component___navigation.title'
  | 'links.component___navigation.updatedAt'
  | 'links.contentful_id'
  | 'links.createdAt'
  | 'links.href'
  | 'links.id'
  | 'links.internal.content'
  | 'links.internal.contentDigest'
  | 'links.internal.description'
  | 'links.internal.fieldOwners'
  | 'links.internal.ignoreType'
  | 'links.internal.mediaType'
  | 'links.internal.owner'
  | 'links.internal.type'
  | 'links.node_locale'
  | 'links.parent.children'
  | 'links.parent.children.children'
  | 'links.parent.children.id'
  | 'links.parent.id'
  | 'links.parent.internal.content'
  | 'links.parent.internal.contentDigest'
  | 'links.parent.internal.description'
  | 'links.parent.internal.fieldOwners'
  | 'links.parent.internal.ignoreType'
  | 'links.parent.internal.mediaType'
  | 'links.parent.internal.owner'
  | 'links.parent.internal.type'
  | 'links.parent.parent.children'
  | 'links.parent.parent.id'
  | 'links.spaceId'
  | 'links.sys.revision'
  | 'links.sys.type'
  | 'links.text'
  | 'links.updatedAt'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt';

type ContentfulComponentNavigationFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly links: InputMaybe<ContentfulLinkFilterListInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulComponentNavigationSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulComponentNavigationFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulComponentNavigationFilterInput>;
};

type ContentfulComponentNavigationGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentNavigationEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentNavigationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentNavigation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentNavigationGroupConnection_distinctArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
};


type ContentfulComponentNavigationGroupConnection_groupArgs = {
  field: ContentfulComponentNavigationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentNavigationSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentNavigationFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentNavigationSys = {
  readonly contentType: Maybe<ContentfulComponentNavigationSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentNavigationSysContentType = {
  readonly sys: Maybe<ContentfulComponentNavigationSysContentTypeSys>;
};

type ContentfulComponentNavigationSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulComponentNavigationSysContentTypeSysFilterInput>;
};

type ContentfulComponentNavigationSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentNavigationSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentNavigationSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulComponentNavigationSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentParagraph = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<ContentfulComponentParagraphContent>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly page___flex_page: Maybe<ReadonlyArray<Maybe<ContentfulPageFlexPage>>>;
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulComponentParagraphSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulComponentParagraph_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulComponentParagraph_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulComponentParagraphConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentParagraphEdge>;
  readonly group: ReadonlyArray<ContentfulComponentParagraphGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentParagraph>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentParagraphConnection_distinctArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphConnection_groupArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentParagraphContent = {
  readonly raw: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraphContentFilterInput = {
  readonly raw: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentParagraphEdge = {
  readonly next: Maybe<ContentfulComponentParagraph>;
  readonly node: ContentfulComponentParagraph;
  readonly previous: Maybe<ContentfulComponentParagraph>;
};

type ContentfulComponentParagraphFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'content.raw'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'page___flex_page'
  | 'page___flex_page.children'
  | 'page___flex_page.children.children'
  | 'page___flex_page.children.children.children'
  | 'page___flex_page.children.children.id'
  | 'page___flex_page.children.id'
  | 'page___flex_page.children.internal.content'
  | 'page___flex_page.children.internal.contentDigest'
  | 'page___flex_page.children.internal.description'
  | 'page___flex_page.children.internal.fieldOwners'
  | 'page___flex_page.children.internal.ignoreType'
  | 'page___flex_page.children.internal.mediaType'
  | 'page___flex_page.children.internal.owner'
  | 'page___flex_page.children.internal.type'
  | 'page___flex_page.children.parent.children'
  | 'page___flex_page.children.parent.id'
  | 'page___flex_page.contentful_id'
  | 'page___flex_page.createdAt'
  | 'page___flex_page.id'
  | 'page___flex_page.internal.content'
  | 'page___flex_page.internal.contentDigest'
  | 'page___flex_page.internal.description'
  | 'page___flex_page.internal.fieldOwners'
  | 'page___flex_page.internal.ignoreType'
  | 'page___flex_page.internal.mediaType'
  | 'page___flex_page.internal.owner'
  | 'page___flex_page.internal.type'
  | 'page___flex_page.node_locale'
  | 'page___flex_page.parent.children'
  | 'page___flex_page.parent.children.children'
  | 'page___flex_page.parent.children.id'
  | 'page___flex_page.parent.id'
  | 'page___flex_page.parent.internal.content'
  | 'page___flex_page.parent.internal.contentDigest'
  | 'page___flex_page.parent.internal.description'
  | 'page___flex_page.parent.internal.fieldOwners'
  | 'page___flex_page.parent.internal.ignoreType'
  | 'page___flex_page.parent.internal.mediaType'
  | 'page___flex_page.parent.internal.owner'
  | 'page___flex_page.parent.internal.type'
  | 'page___flex_page.parent.parent.children'
  | 'page___flex_page.parent.parent.id'
  | 'page___flex_page.slug'
  | 'page___flex_page.spaceId'
  | 'page___flex_page.sys.revision'
  | 'page___flex_page.sys.type'
  | 'page___flex_page.updatedAt'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt';

type ContentfulComponentParagraphFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly content: InputMaybe<ContentfulComponentParagraphContentFilterInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulComponentParagraphSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulComponentParagraphGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulComponentParagraphEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulComponentParagraphGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulComponentParagraph>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulComponentParagraphGroupConnection_distinctArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
};


type ContentfulComponentParagraphGroupConnection_groupArgs = {
  field: ContentfulComponentParagraphFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulComponentParagraphSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulComponentParagraphFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulComponentParagraphSys = {
  readonly contentType: Maybe<ContentfulComponentParagraphSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraphSysContentType = {
  readonly sys: Maybe<ContentfulComponentParagraphSysContentTypeSys>;
};

type ContentfulComponentParagraphSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulComponentParagraphSysContentTypeSysFilterInput>;
};

type ContentfulComponentParagraphSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulComponentParagraphSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulComponentParagraphSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulComponentParagraphSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulContentType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly description: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

type ContentfulContentTypeFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'description'
  | 'displayField'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'sys.type';

type ContentfulContentTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly displayField: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulContentTypeGroupConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeGroupConnection_groupArgs = {
  field: ContentfulContentTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulContentTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulEntityPerson = ContentfulEntry & ContentfulReference & Node & {
  /** Returns the first child node of type contentfulEntityPersonShortBioTextNode or null if there are no children of given type on this node */
  readonly childContentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulEntityPersonShortBioTextNode */
  readonly childrenContentfulEntityPersonShortBioTextNode: Maybe<ReadonlyArray<Maybe<contentfulEntityPersonShortBioTextNode>>>;
  readonly company: Maybe<Scalars['String']>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly email: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  readonly github: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly node_locale: Scalars['String'];
  readonly page___blog_post: Maybe<ReadonlyArray<Maybe<ContentfulPageBlogPost>>>;
  readonly parent: Maybe<Node>;
  readonly phone: Maybe<Scalars['String']>;
  readonly shortBio: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulEntityPersonSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulEntityPerson_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulEntityPerson_gatsbyPathArgs = {
  filePath: InputMaybe<Scalars['String']>;
};


type ContentfulEntityPerson_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulEntityPersonConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntityPersonEdge>;
  readonly group: ReadonlyArray<ContentfulEntityPersonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntityPerson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntityPersonConnection_distinctArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonConnection_groupArgs = {
  field: ContentfulEntityPersonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulEntityPersonEdge = {
  readonly next: Maybe<ContentfulEntityPerson>;
  readonly node: ContentfulEntityPerson;
  readonly previous: Maybe<ContentfulEntityPerson>;
};

type ContentfulEntityPersonFieldsEnum =
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulEntityPersonShortBioTextNode.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulEntityPersonShortBioTextNode.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.children.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.children.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.children.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.id'
  | 'childContentfulEntityPersonShortBioTextNode.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.children.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.content'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.description'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.mediaType'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.owner'
  | 'childContentfulEntityPersonShortBioTextNode.parent.internal.type'
  | 'childContentfulEntityPersonShortBioTextNode.parent.parent.children'
  | 'childContentfulEntityPersonShortBioTextNode.parent.parent.id'
  | 'childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'childContentfulEntityPersonShortBioTextNode.sys.type'
  | 'children'
  | 'childrenContentfulEntityPersonShortBioTextNode'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulEntityPersonShortBioTextNode.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.children.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.children.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.content'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.contentDigest'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.description'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.ignoreType'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.mediaType'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.owner'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.internal.type'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.parent.children'
  | 'childrenContentfulEntityPersonShortBioTextNode.parent.parent.id'
  | 'childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'childrenContentfulEntityPersonShortBioTextNode.sys.type'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'company'
  | 'contentful_id'
  | 'createdAt'
  | 'email'
  | 'facebook'
  | 'gatsbyPath'
  | 'github'
  | 'id'
  | 'image.children'
  | 'image.children.children'
  | 'image.children.children.children'
  | 'image.children.children.id'
  | 'image.children.id'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.children.parent.children'
  | 'image.children.parent.id'
  | 'image.contentful_id'
  | 'image.createdAt'
  | 'image.description'
  | 'image.file.contentType'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.url'
  | 'image.filename'
  | 'image.filesize'
  | 'image.gatsbyImage'
  | 'image.gatsbyImageData'
  | 'image.height'
  | 'image.id'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'image.mimeType'
  | 'image.node_locale'
  | 'image.parent.children'
  | 'image.parent.children.children'
  | 'image.parent.children.id'
  | 'image.parent.id'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.parent.parent.children'
  | 'image.parent.parent.id'
  | 'image.placeholderUrl'
  | 'image.publicUrl'
  | 'image.resize.height'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.spaceId'
  | 'image.sys.revision'
  | 'image.sys.type'
  | 'image.title'
  | 'image.updatedAt'
  | 'image.url'
  | 'image.width'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'node_locale'
  | 'page___blog_post'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.children.children'
  | 'page___blog_post.author.children.id'
  | 'page___blog_post.author.company'
  | 'page___blog_post.author.contentful_id'
  | 'page___blog_post.author.createdAt'
  | 'page___blog_post.author.email'
  | 'page___blog_post.author.facebook'
  | 'page___blog_post.author.gatsbyPath'
  | 'page___blog_post.author.github'
  | 'page___blog_post.author.id'
  | 'page___blog_post.author.image.children'
  | 'page___blog_post.author.image.contentful_id'
  | 'page___blog_post.author.image.createdAt'
  | 'page___blog_post.author.image.description'
  | 'page___blog_post.author.image.filename'
  | 'page___blog_post.author.image.filesize'
  | 'page___blog_post.author.image.gatsbyImage'
  | 'page___blog_post.author.image.gatsbyImageData'
  | 'page___blog_post.author.image.height'
  | 'page___blog_post.author.image.id'
  | 'page___blog_post.author.image.mimeType'
  | 'page___blog_post.author.image.node_locale'
  | 'page___blog_post.author.image.placeholderUrl'
  | 'page___blog_post.author.image.publicUrl'
  | 'page___blog_post.author.image.spaceId'
  | 'page___blog_post.author.image.title'
  | 'page___blog_post.author.image.updatedAt'
  | 'page___blog_post.author.image.url'
  | 'page___blog_post.author.image.width'
  | 'page___blog_post.author.internal.content'
  | 'page___blog_post.author.internal.contentDigest'
  | 'page___blog_post.author.internal.description'
  | 'page___blog_post.author.internal.fieldOwners'
  | 'page___blog_post.author.internal.ignoreType'
  | 'page___blog_post.author.internal.mediaType'
  | 'page___blog_post.author.internal.owner'
  | 'page___blog_post.author.internal.type'
  | 'page___blog_post.author.name'
  | 'page___blog_post.author.node_locale'
  | 'page___blog_post.author.page___blog_post'
  | 'page___blog_post.author.page___blog_post.children'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.author.page___blog_post.contentful_id'
  | 'page___blog_post.author.page___blog_post.createdAt'
  | 'page___blog_post.author.page___blog_post.id'
  | 'page___blog_post.author.page___blog_post.node_locale'
  | 'page___blog_post.author.page___blog_post.publishDate'
  | 'page___blog_post.author.page___blog_post.slug'
  | 'page___blog_post.author.page___blog_post.spaceId'
  | 'page___blog_post.author.page___blog_post.tags'
  | 'page___blog_post.author.page___blog_post.title'
  | 'page___blog_post.author.page___blog_post.updatedAt'
  | 'page___blog_post.author.parent.children'
  | 'page___blog_post.author.parent.id'
  | 'page___blog_post.author.phone'
  | 'page___blog_post.author.shortBio.children'
  | 'page___blog_post.author.shortBio.childrenMarkdownRemark'
  | 'page___blog_post.author.shortBio.id'
  | 'page___blog_post.author.shortBio.shortBio'
  | 'page___blog_post.author.spaceId'
  | 'page___blog_post.author.sys.revision'
  | 'page___blog_post.author.sys.type'
  | 'page___blog_post.author.title'
  | 'page___blog_post.author.twitter'
  | 'page___blog_post.author.updatedAt'
  | 'page___blog_post.body.body'
  | 'page___blog_post.body.childMarkdownRemark.children'
  | 'page___blog_post.body.childMarkdownRemark.excerpt'
  | 'page___blog_post.body.childMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childMarkdownRemark.headings'
  | 'page___blog_post.body.childMarkdownRemark.html'
  | 'page___blog_post.body.childMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childMarkdownRemark.id'
  | 'page___blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childMarkdownRemark.timeToRead'
  | 'page___blog_post.body.children'
  | 'page___blog_post.body.childrenMarkdownRemark'
  | 'page___blog_post.body.childrenMarkdownRemark.children'
  | 'page___blog_post.body.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childrenMarkdownRemark.headings'
  | 'page___blog_post.body.childrenMarkdownRemark.html'
  | 'page___blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childrenMarkdownRemark.id'
  | 'page___blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.body.children.children'
  | 'page___blog_post.body.children.id'
  | 'page___blog_post.body.id'
  | 'page___blog_post.body.internal.content'
  | 'page___blog_post.body.internal.contentDigest'
  | 'page___blog_post.body.internal.description'
  | 'page___blog_post.body.internal.fieldOwners'
  | 'page___blog_post.body.internal.ignoreType'
  | 'page___blog_post.body.internal.mediaType'
  | 'page___blog_post.body.internal.owner'
  | 'page___blog_post.body.internal.type'
  | 'page___blog_post.body.parent.children'
  | 'page___blog_post.body.parent.id'
  | 'page___blog_post.body.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.children.children'
  | 'page___blog_post.children.children.children'
  | 'page___blog_post.children.children.id'
  | 'page___blog_post.children.id'
  | 'page___blog_post.children.internal.content'
  | 'page___blog_post.children.internal.contentDigest'
  | 'page___blog_post.children.internal.description'
  | 'page___blog_post.children.internal.fieldOwners'
  | 'page___blog_post.children.internal.ignoreType'
  | 'page___blog_post.children.internal.mediaType'
  | 'page___blog_post.children.internal.owner'
  | 'page___blog_post.children.internal.type'
  | 'page___blog_post.children.parent.children'
  | 'page___blog_post.children.parent.id'
  | 'page___blog_post.contentful_id'
  | 'page___blog_post.createdAt'
  | 'page___blog_post.description.childMarkdownRemark.children'
  | 'page___blog_post.description.childMarkdownRemark.excerpt'
  | 'page___blog_post.description.childMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childMarkdownRemark.headings'
  | 'page___blog_post.description.childMarkdownRemark.html'
  | 'page___blog_post.description.childMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childMarkdownRemark.id'
  | 'page___blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childMarkdownRemark.timeToRead'
  | 'page___blog_post.description.children'
  | 'page___blog_post.description.childrenMarkdownRemark'
  | 'page___blog_post.description.childrenMarkdownRemark.children'
  | 'page___blog_post.description.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childrenMarkdownRemark.headings'
  | 'page___blog_post.description.childrenMarkdownRemark.html'
  | 'page___blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childrenMarkdownRemark.id'
  | 'page___blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.description.children.children'
  | 'page___blog_post.description.children.id'
  | 'page___blog_post.description.description'
  | 'page___blog_post.description.id'
  | 'page___blog_post.description.internal.content'
  | 'page___blog_post.description.internal.contentDigest'
  | 'page___blog_post.description.internal.description'
  | 'page___blog_post.description.internal.fieldOwners'
  | 'page___blog_post.description.internal.ignoreType'
  | 'page___blog_post.description.internal.mediaType'
  | 'page___blog_post.description.internal.owner'
  | 'page___blog_post.description.internal.type'
  | 'page___blog_post.description.parent.children'
  | 'page___blog_post.description.parent.id'
  | 'page___blog_post.description.sys.type'
  | 'page___blog_post.heroImage.children'
  | 'page___blog_post.heroImage.children.children'
  | 'page___blog_post.heroImage.children.id'
  | 'page___blog_post.heroImage.contentful_id'
  | 'page___blog_post.heroImage.createdAt'
  | 'page___blog_post.heroImage.description'
  | 'page___blog_post.heroImage.file.contentType'
  | 'page___blog_post.heroImage.file.fileName'
  | 'page___blog_post.heroImage.file.url'
  | 'page___blog_post.heroImage.filename'
  | 'page___blog_post.heroImage.filesize'
  | 'page___blog_post.heroImage.gatsbyImage'
  | 'page___blog_post.heroImage.gatsbyImageData'
  | 'page___blog_post.heroImage.height'
  | 'page___blog_post.heroImage.id'
  | 'page___blog_post.heroImage.internal.content'
  | 'page___blog_post.heroImage.internal.contentDigest'
  | 'page___blog_post.heroImage.internal.description'
  | 'page___blog_post.heroImage.internal.fieldOwners'
  | 'page___blog_post.heroImage.internal.ignoreType'
  | 'page___blog_post.heroImage.internal.mediaType'
  | 'page___blog_post.heroImage.internal.owner'
  | 'page___blog_post.heroImage.internal.type'
  | 'page___blog_post.heroImage.mimeType'
  | 'page___blog_post.heroImage.node_locale'
  | 'page___blog_post.heroImage.parent.children'
  | 'page___blog_post.heroImage.parent.id'
  | 'page___blog_post.heroImage.placeholderUrl'
  | 'page___blog_post.heroImage.publicUrl'
  | 'page___blog_post.heroImage.resize.height'
  | 'page___blog_post.heroImage.resize.src'
  | 'page___blog_post.heroImage.resize.width'
  | 'page___blog_post.heroImage.spaceId'
  | 'page___blog_post.heroImage.sys.revision'
  | 'page___blog_post.heroImage.sys.type'
  | 'page___blog_post.heroImage.title'
  | 'page___blog_post.heroImage.updatedAt'
  | 'page___blog_post.heroImage.url'
  | 'page___blog_post.heroImage.width'
  | 'page___blog_post.id'
  | 'page___blog_post.internal.content'
  | 'page___blog_post.internal.contentDigest'
  | 'page___blog_post.internal.description'
  | 'page___blog_post.internal.fieldOwners'
  | 'page___blog_post.internal.ignoreType'
  | 'page___blog_post.internal.mediaType'
  | 'page___blog_post.internal.owner'
  | 'page___blog_post.internal.type'
  | 'page___blog_post.node_locale'
  | 'page___blog_post.parent.children'
  | 'page___blog_post.parent.children.children'
  | 'page___blog_post.parent.children.id'
  | 'page___blog_post.parent.id'
  | 'page___blog_post.parent.internal.content'
  | 'page___blog_post.parent.internal.contentDigest'
  | 'page___blog_post.parent.internal.description'
  | 'page___blog_post.parent.internal.fieldOwners'
  | 'page___blog_post.parent.internal.ignoreType'
  | 'page___blog_post.parent.internal.mediaType'
  | 'page___blog_post.parent.internal.owner'
  | 'page___blog_post.parent.internal.type'
  | 'page___blog_post.parent.parent.children'
  | 'page___blog_post.parent.parent.id'
  | 'page___blog_post.publishDate'
  | 'page___blog_post.seo.children'
  | 'page___blog_post.seo.children.children'
  | 'page___blog_post.seo.children.id'
  | 'page___blog_post.seo.contentful_id'
  | 'page___blog_post.seo.createdAt'
  | 'page___blog_post.seo.description'
  | 'page___blog_post.seo.id'
  | 'page___blog_post.seo.image.children'
  | 'page___blog_post.seo.image.contentful_id'
  | 'page___blog_post.seo.image.createdAt'
  | 'page___blog_post.seo.image.description'
  | 'page___blog_post.seo.image.filename'
  | 'page___blog_post.seo.image.filesize'
  | 'page___blog_post.seo.image.gatsbyImage'
  | 'page___blog_post.seo.image.gatsbyImageData'
  | 'page___blog_post.seo.image.height'
  | 'page___blog_post.seo.image.id'
  | 'page___blog_post.seo.image.mimeType'
  | 'page___blog_post.seo.image.node_locale'
  | 'page___blog_post.seo.image.placeholderUrl'
  | 'page___blog_post.seo.image.publicUrl'
  | 'page___blog_post.seo.image.spaceId'
  | 'page___blog_post.seo.image.title'
  | 'page___blog_post.seo.image.updatedAt'
  | 'page___blog_post.seo.image.url'
  | 'page___blog_post.seo.image.width'
  | 'page___blog_post.seo.internal.content'
  | 'page___blog_post.seo.internal.contentDigest'
  | 'page___blog_post.seo.internal.description'
  | 'page___blog_post.seo.internal.fieldOwners'
  | 'page___blog_post.seo.internal.ignoreType'
  | 'page___blog_post.seo.internal.mediaType'
  | 'page___blog_post.seo.internal.owner'
  | 'page___blog_post.seo.internal.type'
  | 'page___blog_post.seo.node_locale'
  | 'page___blog_post.seo.page___blog_post'
  | 'page___blog_post.seo.page___blog_post.children'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.seo.page___blog_post.contentful_id'
  | 'page___blog_post.seo.page___blog_post.createdAt'
  | 'page___blog_post.seo.page___blog_post.id'
  | 'page___blog_post.seo.page___blog_post.node_locale'
  | 'page___blog_post.seo.page___blog_post.publishDate'
  | 'page___blog_post.seo.page___blog_post.slug'
  | 'page___blog_post.seo.page___blog_post.spaceId'
  | 'page___blog_post.seo.page___blog_post.tags'
  | 'page___blog_post.seo.page___blog_post.title'
  | 'page___blog_post.seo.page___blog_post.updatedAt'
  | 'page___blog_post.seo.parent.children'
  | 'page___blog_post.seo.parent.id'
  | 'page___blog_post.seo.robots'
  | 'page___blog_post.seo.spaceId'
  | 'page___blog_post.seo.sys.revision'
  | 'page___blog_post.seo.sys.type'
  | 'page___blog_post.seo.title'
  | 'page___blog_post.seo.updatedAt'
  | 'page___blog_post.slug'
  | 'page___blog_post.spaceId'
  | 'page___blog_post.sys.revision'
  | 'page___blog_post.sys.type'
  | 'page___blog_post.tags'
  | 'page___blog_post.title'
  | 'page___blog_post.updatedAt'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'phone'
  | 'shortBio.childMarkdownRemark.children'
  | 'shortBio.childMarkdownRemark.children.children'
  | 'shortBio.childMarkdownRemark.children.id'
  | 'shortBio.childMarkdownRemark.excerpt'
  | 'shortBio.childMarkdownRemark.excerptAst'
  | 'shortBio.childMarkdownRemark.frontmatter.title'
  | 'shortBio.childMarkdownRemark.headings'
  | 'shortBio.childMarkdownRemark.headings.depth'
  | 'shortBio.childMarkdownRemark.headings.id'
  | 'shortBio.childMarkdownRemark.headings.value'
  | 'shortBio.childMarkdownRemark.html'
  | 'shortBio.childMarkdownRemark.htmlAst'
  | 'shortBio.childMarkdownRemark.id'
  | 'shortBio.childMarkdownRemark.internal.content'
  | 'shortBio.childMarkdownRemark.internal.contentDigest'
  | 'shortBio.childMarkdownRemark.internal.description'
  | 'shortBio.childMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childMarkdownRemark.internal.ignoreType'
  | 'shortBio.childMarkdownRemark.internal.mediaType'
  | 'shortBio.childMarkdownRemark.internal.owner'
  | 'shortBio.childMarkdownRemark.internal.type'
  | 'shortBio.childMarkdownRemark.parent.children'
  | 'shortBio.childMarkdownRemark.parent.id'
  | 'shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childMarkdownRemark.tableOfContents'
  | 'shortBio.childMarkdownRemark.timeToRead'
  | 'shortBio.childMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childMarkdownRemark.wordCount.sentences'
  | 'shortBio.childMarkdownRemark.wordCount.words'
  | 'shortBio.children'
  | 'shortBio.childrenMarkdownRemark'
  | 'shortBio.childrenMarkdownRemark.children'
  | 'shortBio.childrenMarkdownRemark.children.children'
  | 'shortBio.childrenMarkdownRemark.children.id'
  | 'shortBio.childrenMarkdownRemark.excerpt'
  | 'shortBio.childrenMarkdownRemark.excerptAst'
  | 'shortBio.childrenMarkdownRemark.frontmatter.title'
  | 'shortBio.childrenMarkdownRemark.headings'
  | 'shortBio.childrenMarkdownRemark.headings.depth'
  | 'shortBio.childrenMarkdownRemark.headings.id'
  | 'shortBio.childrenMarkdownRemark.headings.value'
  | 'shortBio.childrenMarkdownRemark.html'
  | 'shortBio.childrenMarkdownRemark.htmlAst'
  | 'shortBio.childrenMarkdownRemark.id'
  | 'shortBio.childrenMarkdownRemark.internal.content'
  | 'shortBio.childrenMarkdownRemark.internal.contentDigest'
  | 'shortBio.childrenMarkdownRemark.internal.description'
  | 'shortBio.childrenMarkdownRemark.internal.fieldOwners'
  | 'shortBio.childrenMarkdownRemark.internal.ignoreType'
  | 'shortBio.childrenMarkdownRemark.internal.mediaType'
  | 'shortBio.childrenMarkdownRemark.internal.owner'
  | 'shortBio.childrenMarkdownRemark.internal.type'
  | 'shortBio.childrenMarkdownRemark.parent.children'
  | 'shortBio.childrenMarkdownRemark.parent.id'
  | 'shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'shortBio.childrenMarkdownRemark.tableOfContents'
  | 'shortBio.childrenMarkdownRemark.timeToRead'
  | 'shortBio.childrenMarkdownRemark.wordCount.paragraphs'
  | 'shortBio.childrenMarkdownRemark.wordCount.sentences'
  | 'shortBio.childrenMarkdownRemark.wordCount.words'
  | 'shortBio.children.children'
  | 'shortBio.children.children.children'
  | 'shortBio.children.children.id'
  | 'shortBio.children.id'
  | 'shortBio.children.internal.content'
  | 'shortBio.children.internal.contentDigest'
  | 'shortBio.children.internal.description'
  | 'shortBio.children.internal.fieldOwners'
  | 'shortBio.children.internal.ignoreType'
  | 'shortBio.children.internal.mediaType'
  | 'shortBio.children.internal.owner'
  | 'shortBio.children.internal.type'
  | 'shortBio.children.parent.children'
  | 'shortBio.children.parent.id'
  | 'shortBio.id'
  | 'shortBio.internal.content'
  | 'shortBio.internal.contentDigest'
  | 'shortBio.internal.description'
  | 'shortBio.internal.fieldOwners'
  | 'shortBio.internal.ignoreType'
  | 'shortBio.internal.mediaType'
  | 'shortBio.internal.owner'
  | 'shortBio.internal.type'
  | 'shortBio.parent.children'
  | 'shortBio.parent.children.children'
  | 'shortBio.parent.children.id'
  | 'shortBio.parent.id'
  | 'shortBio.parent.internal.content'
  | 'shortBio.parent.internal.contentDigest'
  | 'shortBio.parent.internal.description'
  | 'shortBio.parent.internal.fieldOwners'
  | 'shortBio.parent.internal.ignoreType'
  | 'shortBio.parent.internal.mediaType'
  | 'shortBio.parent.internal.owner'
  | 'shortBio.parent.internal.type'
  | 'shortBio.parent.parent.children'
  | 'shortBio.parent.parent.id'
  | 'shortBio.shortBio'
  | 'shortBio.sys.type'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'twitter'
  | 'updatedAt';

type ContentfulEntityPersonFilterInput = {
  readonly childContentfulEntityPersonShortBioTextNode: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulEntityPersonShortBioTextNode: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterListInput>;
  readonly company: InputMaybe<StringQueryOperatorInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly facebook: InputMaybe<StringQueryOperatorInput>;
  readonly gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  readonly github: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly page___blog_post: InputMaybe<ContentfulPageBlogPostFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly phone: InputMaybe<StringQueryOperatorInput>;
  readonly shortBio: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulEntityPersonSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly twitter: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulEntityPersonGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntityPersonEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntityPersonGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntityPerson>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntityPersonGroupConnection_distinctArgs = {
  field: ContentfulEntityPersonFieldsEnum;
};


type ContentfulEntityPersonGroupConnection_groupArgs = {
  field: ContentfulEntityPersonFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulEntityPersonSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntityPersonFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulEntityPersonSys = {
  readonly contentType: Maybe<ContentfulEntityPersonSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulEntityPersonSysContentType = {
  readonly sys: Maybe<ContentfulEntityPersonSysContentTypeSys>;
};

type ContentfulEntityPersonSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulEntityPersonSysContentTypeSysFilterInput>;
};

type ContentfulEntityPersonSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulEntityPersonSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulEntityPersonSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulEntityPersonSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulEntry = {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
};

type ContentfulEntryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

type ContentfulEntryFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type ContentfulEntryFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type ContentfulEntryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulEntryGroupConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryGroupConnection_groupArgs = {
  field: ContentfulEntryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulEntrySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulEntryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulImageCropFocus =
  | 'bottom'
  | 'bottom_right'
  | 'bottom_left'
  | 'center'
  | 'face'
  | 'faces'
  | 'left'
  | 'right'
  | 'top'
  | 'top_left'
  | 'top_right';

type ContentfulLink = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component___navigation: Maybe<ReadonlyArray<Maybe<ContentfulComponentNavigation>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly href: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulLinkSys>;
  readonly text: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulLink_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulLink_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulLinkConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulLinkEdge>;
  readonly group: ReadonlyArray<ContentfulLinkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulLink>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulLinkConnection_distinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkConnection_groupArgs = {
  field: ContentfulLinkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulLinkEdge = {
  readonly next: Maybe<ContentfulLink>;
  readonly node: ContentfulLink;
  readonly previous: Maybe<ContentfulLink>;
};

type ContentfulLinkFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'component___navigation'
  | 'component___navigation.children'
  | 'component___navigation.children.children'
  | 'component___navigation.children.children.children'
  | 'component___navigation.children.children.id'
  | 'component___navigation.children.id'
  | 'component___navigation.children.internal.content'
  | 'component___navigation.children.internal.contentDigest'
  | 'component___navigation.children.internal.description'
  | 'component___navigation.children.internal.fieldOwners'
  | 'component___navigation.children.internal.ignoreType'
  | 'component___navigation.children.internal.mediaType'
  | 'component___navigation.children.internal.owner'
  | 'component___navigation.children.internal.type'
  | 'component___navigation.children.parent.children'
  | 'component___navigation.children.parent.id'
  | 'component___navigation.contentful_id'
  | 'component___navigation.createdAt'
  | 'component___navigation.id'
  | 'component___navigation.internal.content'
  | 'component___navigation.internal.contentDigest'
  | 'component___navigation.internal.description'
  | 'component___navigation.internal.fieldOwners'
  | 'component___navigation.internal.ignoreType'
  | 'component___navigation.internal.mediaType'
  | 'component___navigation.internal.owner'
  | 'component___navigation.internal.type'
  | 'component___navigation.links'
  | 'component___navigation.links.children'
  | 'component___navigation.links.children.children'
  | 'component___navigation.links.children.id'
  | 'component___navigation.links.component___navigation'
  | 'component___navigation.links.component___navigation.children'
  | 'component___navigation.links.component___navigation.contentful_id'
  | 'component___navigation.links.component___navigation.createdAt'
  | 'component___navigation.links.component___navigation.id'
  | 'component___navigation.links.component___navigation.links'
  | 'component___navigation.links.component___navigation.node_locale'
  | 'component___navigation.links.component___navigation.spaceId'
  | 'component___navigation.links.component___navigation.title'
  | 'component___navigation.links.component___navigation.updatedAt'
  | 'component___navigation.links.contentful_id'
  | 'component___navigation.links.createdAt'
  | 'component___navigation.links.href'
  | 'component___navigation.links.id'
  | 'component___navigation.links.internal.content'
  | 'component___navigation.links.internal.contentDigest'
  | 'component___navigation.links.internal.description'
  | 'component___navigation.links.internal.fieldOwners'
  | 'component___navigation.links.internal.ignoreType'
  | 'component___navigation.links.internal.mediaType'
  | 'component___navigation.links.internal.owner'
  | 'component___navigation.links.internal.type'
  | 'component___navigation.links.node_locale'
  | 'component___navigation.links.parent.children'
  | 'component___navigation.links.parent.id'
  | 'component___navigation.links.spaceId'
  | 'component___navigation.links.sys.revision'
  | 'component___navigation.links.sys.type'
  | 'component___navigation.links.text'
  | 'component___navigation.links.updatedAt'
  | 'component___navigation.node_locale'
  | 'component___navigation.parent.children'
  | 'component___navigation.parent.children.children'
  | 'component___navigation.parent.children.id'
  | 'component___navigation.parent.id'
  | 'component___navigation.parent.internal.content'
  | 'component___navigation.parent.internal.contentDigest'
  | 'component___navigation.parent.internal.description'
  | 'component___navigation.parent.internal.fieldOwners'
  | 'component___navigation.parent.internal.ignoreType'
  | 'component___navigation.parent.internal.mediaType'
  | 'component___navigation.parent.internal.owner'
  | 'component___navigation.parent.internal.type'
  | 'component___navigation.parent.parent.children'
  | 'component___navigation.parent.parent.id'
  | 'component___navigation.spaceId'
  | 'component___navigation.sys.revision'
  | 'component___navigation.sys.type'
  | 'component___navigation.title'
  | 'component___navigation.updatedAt'
  | 'contentful_id'
  | 'createdAt'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'text'
  | 'updatedAt';

type ContentfulLinkFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component___navigation: InputMaybe<ContentfulComponentNavigationFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulLinkSysFilterInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulLinkFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulLinkFilterInput>;
};

type ContentfulLinkGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulLinkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulLinkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulLink>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulLinkGroupConnection_distinctArgs = {
  field: ContentfulLinkFieldsEnum;
};


type ContentfulLinkGroupConnection_groupArgs = {
  field: ContentfulLinkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulLinkSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulLinkFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulLinkSys = {
  readonly contentType: Maybe<ContentfulLinkSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulLinkSysContentType = {
  readonly sys: Maybe<ContentfulLinkSysContentTypeSys>;
};

type ContentfulLinkSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulLinkSysContentTypeSysFilterInput>;
};

type ContentfulLinkSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulLinkSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulLinkSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulLinkSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageBlogPost = ContentfulEntry & ContentfulReference & Node & {
  readonly author: Maybe<ContentfulEntityPerson>;
  readonly body: Maybe<contentfulPageBlogPostBodyTextNode>;
  /** Returns the first child node of type contentfulPageBlogPostBodyTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNode>;
  /** Returns the first child node of type contentfulPageBlogPostDescriptionTextNode or null if there are no children of given type on this node */
  readonly childContentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type contentfulPageBlogPostBodyTextNode */
  readonly childrenContentfulPageBlogPostBodyTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostBodyTextNode>>>;
  /** Returns all children nodes filtered by type contentfulPageBlogPostDescriptionTextNode */
  readonly childrenContentfulPageBlogPostDescriptionTextNode: Maybe<ReadonlyArray<Maybe<contentfulPageBlogPostDescriptionTextNode>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly heroImage: Maybe<ContentfulAsset>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly publishDate: Maybe<Scalars['Date']>;
  readonly seo: Maybe<ContentfulSeo>;
  readonly slug: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulPageBlogPostSys>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulPageBlogPost_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulPageBlogPost_publishDateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulPageBlogPost_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulPageBlogPostConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageBlogPostEdge>;
  readonly group: ReadonlyArray<ContentfulPageBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageBlogPostConnection_distinctArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostConnection_groupArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulPageBlogPostEdge = {
  readonly next: Maybe<ContentfulPageBlogPost>;
  readonly node: ContentfulPageBlogPost;
  readonly previous: Maybe<ContentfulPageBlogPost>;
};

type ContentfulPageBlogPostFieldsEnum =
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childContentfulEntityPersonShortBioTextNode.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childContentfulEntityPersonShortBioTextNode.children.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.children.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.content'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.description'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'author.childContentfulEntityPersonShortBioTextNode.internal.type'
  | 'author.childContentfulEntityPersonShortBioTextNode.parent.children'
  | 'author.childContentfulEntityPersonShortBioTextNode.parent.id'
  | 'author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'author.childContentfulEntityPersonShortBioTextNode.sys.type'
  | 'author.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerpt'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.excerptAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.headings'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.html'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.htmlAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childMarkdownRemark.timeToRead'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerpt'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.excerptAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.headings'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.html'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.htmlAst'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.tableOfContents'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark.timeToRead'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.children.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.content'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.contentDigest'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.description'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.fieldOwners'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.ignoreType'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.mediaType'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.owner'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.internal.type'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.parent.children'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.parent.id'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'author.childrenContentfulEntityPersonShortBioTextNode.sys.type'
  | 'author.children.children'
  | 'author.children.children.children'
  | 'author.children.children.id'
  | 'author.children.id'
  | 'author.children.internal.content'
  | 'author.children.internal.contentDigest'
  | 'author.children.internal.description'
  | 'author.children.internal.fieldOwners'
  | 'author.children.internal.ignoreType'
  | 'author.children.internal.mediaType'
  | 'author.children.internal.owner'
  | 'author.children.internal.type'
  | 'author.children.parent.children'
  | 'author.children.parent.id'
  | 'author.company'
  | 'author.contentful_id'
  | 'author.createdAt'
  | 'author.email'
  | 'author.facebook'
  | 'author.gatsbyPath'
  | 'author.github'
  | 'author.id'
  | 'author.image.children'
  | 'author.image.children.children'
  | 'author.image.children.id'
  | 'author.image.contentful_id'
  | 'author.image.createdAt'
  | 'author.image.description'
  | 'author.image.file.contentType'
  | 'author.image.file.fileName'
  | 'author.image.file.url'
  | 'author.image.filename'
  | 'author.image.filesize'
  | 'author.image.gatsbyImage'
  | 'author.image.gatsbyImageData'
  | 'author.image.height'
  | 'author.image.id'
  | 'author.image.internal.content'
  | 'author.image.internal.contentDigest'
  | 'author.image.internal.description'
  | 'author.image.internal.fieldOwners'
  | 'author.image.internal.ignoreType'
  | 'author.image.internal.mediaType'
  | 'author.image.internal.owner'
  | 'author.image.internal.type'
  | 'author.image.mimeType'
  | 'author.image.node_locale'
  | 'author.image.parent.children'
  | 'author.image.parent.id'
  | 'author.image.placeholderUrl'
  | 'author.image.publicUrl'
  | 'author.image.resize.height'
  | 'author.image.resize.src'
  | 'author.image.resize.width'
  | 'author.image.spaceId'
  | 'author.image.sys.revision'
  | 'author.image.sys.type'
  | 'author.image.title'
  | 'author.image.updatedAt'
  | 'author.image.url'
  | 'author.image.width'
  | 'author.internal.content'
  | 'author.internal.contentDigest'
  | 'author.internal.description'
  | 'author.internal.fieldOwners'
  | 'author.internal.ignoreType'
  | 'author.internal.mediaType'
  | 'author.internal.owner'
  | 'author.internal.type'
  | 'author.name'
  | 'author.node_locale'
  | 'author.page___blog_post'
  | 'author.page___blog_post.author.children'
  | 'author.page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'author.page___blog_post.author.company'
  | 'author.page___blog_post.author.contentful_id'
  | 'author.page___blog_post.author.createdAt'
  | 'author.page___blog_post.author.email'
  | 'author.page___blog_post.author.facebook'
  | 'author.page___blog_post.author.gatsbyPath'
  | 'author.page___blog_post.author.github'
  | 'author.page___blog_post.author.id'
  | 'author.page___blog_post.author.name'
  | 'author.page___blog_post.author.node_locale'
  | 'author.page___blog_post.author.page___blog_post'
  | 'author.page___blog_post.author.phone'
  | 'author.page___blog_post.author.spaceId'
  | 'author.page___blog_post.author.title'
  | 'author.page___blog_post.author.twitter'
  | 'author.page___blog_post.author.updatedAt'
  | 'author.page___blog_post.body.body'
  | 'author.page___blog_post.body.children'
  | 'author.page___blog_post.body.childrenMarkdownRemark'
  | 'author.page___blog_post.body.id'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'author.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'author.page___blog_post.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'author.page___blog_post.children.children'
  | 'author.page___blog_post.children.id'
  | 'author.page___blog_post.contentful_id'
  | 'author.page___blog_post.createdAt'
  | 'author.page___blog_post.description.children'
  | 'author.page___blog_post.description.childrenMarkdownRemark'
  | 'author.page___blog_post.description.description'
  | 'author.page___blog_post.description.id'
  | 'author.page___blog_post.heroImage.children'
  | 'author.page___blog_post.heroImage.contentful_id'
  | 'author.page___blog_post.heroImage.createdAt'
  | 'author.page___blog_post.heroImage.description'
  | 'author.page___blog_post.heroImage.filename'
  | 'author.page___blog_post.heroImage.filesize'
  | 'author.page___blog_post.heroImage.gatsbyImage'
  | 'author.page___blog_post.heroImage.gatsbyImageData'
  | 'author.page___blog_post.heroImage.height'
  | 'author.page___blog_post.heroImage.id'
  | 'author.page___blog_post.heroImage.mimeType'
  | 'author.page___blog_post.heroImage.node_locale'
  | 'author.page___blog_post.heroImage.placeholderUrl'
  | 'author.page___blog_post.heroImage.publicUrl'
  | 'author.page___blog_post.heroImage.spaceId'
  | 'author.page___blog_post.heroImage.title'
  | 'author.page___blog_post.heroImage.updatedAt'
  | 'author.page___blog_post.heroImage.url'
  | 'author.page___blog_post.heroImage.width'
  | 'author.page___blog_post.id'
  | 'author.page___blog_post.internal.content'
  | 'author.page___blog_post.internal.contentDigest'
  | 'author.page___blog_post.internal.description'
  | 'author.page___blog_post.internal.fieldOwners'
  | 'author.page___blog_post.internal.ignoreType'
  | 'author.page___blog_post.internal.mediaType'
  | 'author.page___blog_post.internal.owner'
  | 'author.page___blog_post.internal.type'
  | 'author.page___blog_post.node_locale'
  | 'author.page___blog_post.parent.children'
  | 'author.page___blog_post.parent.id'
  | 'author.page___blog_post.publishDate'
  | 'author.page___blog_post.seo.children'
  | 'author.page___blog_post.seo.contentful_id'
  | 'author.page___blog_post.seo.createdAt'
  | 'author.page___blog_post.seo.description'
  | 'author.page___blog_post.seo.id'
  | 'author.page___blog_post.seo.node_locale'
  | 'author.page___blog_post.seo.page___blog_post'
  | 'author.page___blog_post.seo.robots'
  | 'author.page___blog_post.seo.spaceId'
  | 'author.page___blog_post.seo.title'
  | 'author.page___blog_post.seo.updatedAt'
  | 'author.page___blog_post.slug'
  | 'author.page___blog_post.spaceId'
  | 'author.page___blog_post.sys.revision'
  | 'author.page___blog_post.sys.type'
  | 'author.page___blog_post.tags'
  | 'author.page___blog_post.title'
  | 'author.page___blog_post.updatedAt'
  | 'author.parent.children'
  | 'author.parent.children.children'
  | 'author.parent.children.id'
  | 'author.parent.id'
  | 'author.parent.internal.content'
  | 'author.parent.internal.contentDigest'
  | 'author.parent.internal.description'
  | 'author.parent.internal.fieldOwners'
  | 'author.parent.internal.ignoreType'
  | 'author.parent.internal.mediaType'
  | 'author.parent.internal.owner'
  | 'author.parent.internal.type'
  | 'author.parent.parent.children'
  | 'author.parent.parent.id'
  | 'author.phone'
  | 'author.shortBio.childMarkdownRemark.children'
  | 'author.shortBio.childMarkdownRemark.excerpt'
  | 'author.shortBio.childMarkdownRemark.excerptAst'
  | 'author.shortBio.childMarkdownRemark.headings'
  | 'author.shortBio.childMarkdownRemark.html'
  | 'author.shortBio.childMarkdownRemark.htmlAst'
  | 'author.shortBio.childMarkdownRemark.id'
  | 'author.shortBio.childMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childMarkdownRemark.tableOfContents'
  | 'author.shortBio.childMarkdownRemark.timeToRead'
  | 'author.shortBio.children'
  | 'author.shortBio.childrenMarkdownRemark'
  | 'author.shortBio.childrenMarkdownRemark.children'
  | 'author.shortBio.childrenMarkdownRemark.excerpt'
  | 'author.shortBio.childrenMarkdownRemark.excerptAst'
  | 'author.shortBio.childrenMarkdownRemark.headings'
  | 'author.shortBio.childrenMarkdownRemark.html'
  | 'author.shortBio.childrenMarkdownRemark.htmlAst'
  | 'author.shortBio.childrenMarkdownRemark.id'
  | 'author.shortBio.childrenMarkdownRemark.rawMarkdownBody'
  | 'author.shortBio.childrenMarkdownRemark.tableOfContents'
  | 'author.shortBio.childrenMarkdownRemark.timeToRead'
  | 'author.shortBio.children.children'
  | 'author.shortBio.children.id'
  | 'author.shortBio.id'
  | 'author.shortBio.internal.content'
  | 'author.shortBio.internal.contentDigest'
  | 'author.shortBio.internal.description'
  | 'author.shortBio.internal.fieldOwners'
  | 'author.shortBio.internal.ignoreType'
  | 'author.shortBio.internal.mediaType'
  | 'author.shortBio.internal.owner'
  | 'author.shortBio.internal.type'
  | 'author.shortBio.parent.children'
  | 'author.shortBio.parent.id'
  | 'author.shortBio.shortBio'
  | 'author.shortBio.sys.type'
  | 'author.spaceId'
  | 'author.sys.revision'
  | 'author.sys.type'
  | 'author.title'
  | 'author.twitter'
  | 'author.updatedAt'
  | 'body.body'
  | 'body.childMarkdownRemark.children'
  | 'body.childMarkdownRemark.children.children'
  | 'body.childMarkdownRemark.children.id'
  | 'body.childMarkdownRemark.excerpt'
  | 'body.childMarkdownRemark.excerptAst'
  | 'body.childMarkdownRemark.frontmatter.title'
  | 'body.childMarkdownRemark.headings'
  | 'body.childMarkdownRemark.headings.depth'
  | 'body.childMarkdownRemark.headings.id'
  | 'body.childMarkdownRemark.headings.value'
  | 'body.childMarkdownRemark.html'
  | 'body.childMarkdownRemark.htmlAst'
  | 'body.childMarkdownRemark.id'
  | 'body.childMarkdownRemark.internal.content'
  | 'body.childMarkdownRemark.internal.contentDigest'
  | 'body.childMarkdownRemark.internal.description'
  | 'body.childMarkdownRemark.internal.fieldOwners'
  | 'body.childMarkdownRemark.internal.ignoreType'
  | 'body.childMarkdownRemark.internal.mediaType'
  | 'body.childMarkdownRemark.internal.owner'
  | 'body.childMarkdownRemark.internal.type'
  | 'body.childMarkdownRemark.parent.children'
  | 'body.childMarkdownRemark.parent.id'
  | 'body.childMarkdownRemark.rawMarkdownBody'
  | 'body.childMarkdownRemark.tableOfContents'
  | 'body.childMarkdownRemark.timeToRead'
  | 'body.childMarkdownRemark.wordCount.paragraphs'
  | 'body.childMarkdownRemark.wordCount.sentences'
  | 'body.childMarkdownRemark.wordCount.words'
  | 'body.children'
  | 'body.childrenMarkdownRemark'
  | 'body.childrenMarkdownRemark.children'
  | 'body.childrenMarkdownRemark.children.children'
  | 'body.childrenMarkdownRemark.children.id'
  | 'body.childrenMarkdownRemark.excerpt'
  | 'body.childrenMarkdownRemark.excerptAst'
  | 'body.childrenMarkdownRemark.frontmatter.title'
  | 'body.childrenMarkdownRemark.headings'
  | 'body.childrenMarkdownRemark.headings.depth'
  | 'body.childrenMarkdownRemark.headings.id'
  | 'body.childrenMarkdownRemark.headings.value'
  | 'body.childrenMarkdownRemark.html'
  | 'body.childrenMarkdownRemark.htmlAst'
  | 'body.childrenMarkdownRemark.id'
  | 'body.childrenMarkdownRemark.internal.content'
  | 'body.childrenMarkdownRemark.internal.contentDigest'
  | 'body.childrenMarkdownRemark.internal.description'
  | 'body.childrenMarkdownRemark.internal.fieldOwners'
  | 'body.childrenMarkdownRemark.internal.ignoreType'
  | 'body.childrenMarkdownRemark.internal.mediaType'
  | 'body.childrenMarkdownRemark.internal.owner'
  | 'body.childrenMarkdownRemark.internal.type'
  | 'body.childrenMarkdownRemark.parent.children'
  | 'body.childrenMarkdownRemark.parent.id'
  | 'body.childrenMarkdownRemark.rawMarkdownBody'
  | 'body.childrenMarkdownRemark.tableOfContents'
  | 'body.childrenMarkdownRemark.timeToRead'
  | 'body.childrenMarkdownRemark.wordCount.paragraphs'
  | 'body.childrenMarkdownRemark.wordCount.sentences'
  | 'body.childrenMarkdownRemark.wordCount.words'
  | 'body.children.children'
  | 'body.children.children.children'
  | 'body.children.children.id'
  | 'body.children.id'
  | 'body.children.internal.content'
  | 'body.children.internal.contentDigest'
  | 'body.children.internal.description'
  | 'body.children.internal.fieldOwners'
  | 'body.children.internal.ignoreType'
  | 'body.children.internal.mediaType'
  | 'body.children.internal.owner'
  | 'body.children.internal.type'
  | 'body.children.parent.children'
  | 'body.children.parent.id'
  | 'body.id'
  | 'body.internal.content'
  | 'body.internal.contentDigest'
  | 'body.internal.description'
  | 'body.internal.fieldOwners'
  | 'body.internal.ignoreType'
  | 'body.internal.mediaType'
  | 'body.internal.owner'
  | 'body.internal.type'
  | 'body.parent.children'
  | 'body.parent.children.children'
  | 'body.parent.children.id'
  | 'body.parent.id'
  | 'body.parent.internal.content'
  | 'body.parent.internal.contentDigest'
  | 'body.parent.internal.description'
  | 'body.parent.internal.fieldOwners'
  | 'body.parent.internal.ignoreType'
  | 'body.parent.internal.mediaType'
  | 'body.parent.internal.owner'
  | 'body.parent.internal.type'
  | 'body.parent.parent.children'
  | 'body.parent.parent.id'
  | 'body.sys.type'
  | 'childContentfulPageBlogPostBodyTextNode.body'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostBodyTextNode.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostBodyTextNode.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.children.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.children.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.children.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.id'
  | 'childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.children.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.content'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.description'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.owner'
  | 'childContentfulPageBlogPostBodyTextNode.parent.internal.type'
  | 'childContentfulPageBlogPostBodyTextNode.parent.parent.children'
  | 'childContentfulPageBlogPostBodyTextNode.parent.parent.id'
  | 'childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostDescriptionTextNode.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.children.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.children.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.content'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.description'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.internal.type'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.parent.children'
  | 'childContentfulPageBlogPostDescriptionTextNode.parent.parent.id'
  | 'childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'children'
  | 'childrenContentfulPageBlogPostBodyTextNode'
  | 'childrenContentfulPageBlogPostBodyTextNode.body'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostBodyTextNode.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.children.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.children.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.content'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.description'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.owner'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.internal.type'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.parent.children'
  | 'childrenContentfulPageBlogPostBodyTextNode.parent.parent.id'
  | 'childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.frontmatter.title'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.depth'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings.value'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.sentences'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.wordCount.words'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.children.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.children.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.content'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.contentDigest'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.description'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.fieldOwners'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.ignoreType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.mediaType'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.owner'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.internal.type'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.parent.children'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.parent.parent.id'
  | 'childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'description.childMarkdownRemark.children'
  | 'description.childMarkdownRemark.children.children'
  | 'description.childMarkdownRemark.children.id'
  | 'description.childMarkdownRemark.excerpt'
  | 'description.childMarkdownRemark.excerptAst'
  | 'description.childMarkdownRemark.frontmatter.title'
  | 'description.childMarkdownRemark.headings'
  | 'description.childMarkdownRemark.headings.depth'
  | 'description.childMarkdownRemark.headings.id'
  | 'description.childMarkdownRemark.headings.value'
  | 'description.childMarkdownRemark.html'
  | 'description.childMarkdownRemark.htmlAst'
  | 'description.childMarkdownRemark.id'
  | 'description.childMarkdownRemark.internal.content'
  | 'description.childMarkdownRemark.internal.contentDigest'
  | 'description.childMarkdownRemark.internal.description'
  | 'description.childMarkdownRemark.internal.fieldOwners'
  | 'description.childMarkdownRemark.internal.ignoreType'
  | 'description.childMarkdownRemark.internal.mediaType'
  | 'description.childMarkdownRemark.internal.owner'
  | 'description.childMarkdownRemark.internal.type'
  | 'description.childMarkdownRemark.parent.children'
  | 'description.childMarkdownRemark.parent.id'
  | 'description.childMarkdownRemark.rawMarkdownBody'
  | 'description.childMarkdownRemark.tableOfContents'
  | 'description.childMarkdownRemark.timeToRead'
  | 'description.childMarkdownRemark.wordCount.paragraphs'
  | 'description.childMarkdownRemark.wordCount.sentences'
  | 'description.childMarkdownRemark.wordCount.words'
  | 'description.children'
  | 'description.childrenMarkdownRemark'
  | 'description.childrenMarkdownRemark.children'
  | 'description.childrenMarkdownRemark.children.children'
  | 'description.childrenMarkdownRemark.children.id'
  | 'description.childrenMarkdownRemark.excerpt'
  | 'description.childrenMarkdownRemark.excerptAst'
  | 'description.childrenMarkdownRemark.frontmatter.title'
  | 'description.childrenMarkdownRemark.headings'
  | 'description.childrenMarkdownRemark.headings.depth'
  | 'description.childrenMarkdownRemark.headings.id'
  | 'description.childrenMarkdownRemark.headings.value'
  | 'description.childrenMarkdownRemark.html'
  | 'description.childrenMarkdownRemark.htmlAst'
  | 'description.childrenMarkdownRemark.id'
  | 'description.childrenMarkdownRemark.internal.content'
  | 'description.childrenMarkdownRemark.internal.contentDigest'
  | 'description.childrenMarkdownRemark.internal.description'
  | 'description.childrenMarkdownRemark.internal.fieldOwners'
  | 'description.childrenMarkdownRemark.internal.ignoreType'
  | 'description.childrenMarkdownRemark.internal.mediaType'
  | 'description.childrenMarkdownRemark.internal.owner'
  | 'description.childrenMarkdownRemark.internal.type'
  | 'description.childrenMarkdownRemark.parent.children'
  | 'description.childrenMarkdownRemark.parent.id'
  | 'description.childrenMarkdownRemark.rawMarkdownBody'
  | 'description.childrenMarkdownRemark.tableOfContents'
  | 'description.childrenMarkdownRemark.timeToRead'
  | 'description.childrenMarkdownRemark.wordCount.paragraphs'
  | 'description.childrenMarkdownRemark.wordCount.sentences'
  | 'description.childrenMarkdownRemark.wordCount.words'
  | 'description.children.children'
  | 'description.children.children.children'
  | 'description.children.children.id'
  | 'description.children.id'
  | 'description.children.internal.content'
  | 'description.children.internal.contentDigest'
  | 'description.children.internal.description'
  | 'description.children.internal.fieldOwners'
  | 'description.children.internal.ignoreType'
  | 'description.children.internal.mediaType'
  | 'description.children.internal.owner'
  | 'description.children.internal.type'
  | 'description.children.parent.children'
  | 'description.children.parent.id'
  | 'description.description'
  | 'description.id'
  | 'description.internal.content'
  | 'description.internal.contentDigest'
  | 'description.internal.description'
  | 'description.internal.fieldOwners'
  | 'description.internal.ignoreType'
  | 'description.internal.mediaType'
  | 'description.internal.owner'
  | 'description.internal.type'
  | 'description.parent.children'
  | 'description.parent.children.children'
  | 'description.parent.children.id'
  | 'description.parent.id'
  | 'description.parent.internal.content'
  | 'description.parent.internal.contentDigest'
  | 'description.parent.internal.description'
  | 'description.parent.internal.fieldOwners'
  | 'description.parent.internal.ignoreType'
  | 'description.parent.internal.mediaType'
  | 'description.parent.internal.owner'
  | 'description.parent.internal.type'
  | 'description.parent.parent.children'
  | 'description.parent.parent.id'
  | 'description.sys.type'
  | 'heroImage.children'
  | 'heroImage.children.children'
  | 'heroImage.children.children.children'
  | 'heroImage.children.children.id'
  | 'heroImage.children.id'
  | 'heroImage.children.internal.content'
  | 'heroImage.children.internal.contentDigest'
  | 'heroImage.children.internal.description'
  | 'heroImage.children.internal.fieldOwners'
  | 'heroImage.children.internal.ignoreType'
  | 'heroImage.children.internal.mediaType'
  | 'heroImage.children.internal.owner'
  | 'heroImage.children.internal.type'
  | 'heroImage.children.parent.children'
  | 'heroImage.children.parent.id'
  | 'heroImage.contentful_id'
  | 'heroImage.createdAt'
  | 'heroImage.description'
  | 'heroImage.file.contentType'
  | 'heroImage.file.details.size'
  | 'heroImage.file.fileName'
  | 'heroImage.file.url'
  | 'heroImage.filename'
  | 'heroImage.filesize'
  | 'heroImage.gatsbyImage'
  | 'heroImage.gatsbyImageData'
  | 'heroImage.height'
  | 'heroImage.id'
  | 'heroImage.internal.content'
  | 'heroImage.internal.contentDigest'
  | 'heroImage.internal.description'
  | 'heroImage.internal.fieldOwners'
  | 'heroImage.internal.ignoreType'
  | 'heroImage.internal.mediaType'
  | 'heroImage.internal.owner'
  | 'heroImage.internal.type'
  | 'heroImage.mimeType'
  | 'heroImage.node_locale'
  | 'heroImage.parent.children'
  | 'heroImage.parent.children.children'
  | 'heroImage.parent.children.id'
  | 'heroImage.parent.id'
  | 'heroImage.parent.internal.content'
  | 'heroImage.parent.internal.contentDigest'
  | 'heroImage.parent.internal.description'
  | 'heroImage.parent.internal.fieldOwners'
  | 'heroImage.parent.internal.ignoreType'
  | 'heroImage.parent.internal.mediaType'
  | 'heroImage.parent.internal.owner'
  | 'heroImage.parent.internal.type'
  | 'heroImage.parent.parent.children'
  | 'heroImage.parent.parent.id'
  | 'heroImage.placeholderUrl'
  | 'heroImage.publicUrl'
  | 'heroImage.resize.height'
  | 'heroImage.resize.src'
  | 'heroImage.resize.width'
  | 'heroImage.spaceId'
  | 'heroImage.sys.revision'
  | 'heroImage.sys.type'
  | 'heroImage.title'
  | 'heroImage.updatedAt'
  | 'heroImage.url'
  | 'heroImage.width'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'publishDate'
  | 'seo.children'
  | 'seo.children.children'
  | 'seo.children.children.children'
  | 'seo.children.children.id'
  | 'seo.children.id'
  | 'seo.children.internal.content'
  | 'seo.children.internal.contentDigest'
  | 'seo.children.internal.description'
  | 'seo.children.internal.fieldOwners'
  | 'seo.children.internal.ignoreType'
  | 'seo.children.internal.mediaType'
  | 'seo.children.internal.owner'
  | 'seo.children.internal.type'
  | 'seo.children.parent.children'
  | 'seo.children.parent.id'
  | 'seo.contentful_id'
  | 'seo.createdAt'
  | 'seo.description'
  | 'seo.id'
  | 'seo.image.children'
  | 'seo.image.children.children'
  | 'seo.image.children.id'
  | 'seo.image.contentful_id'
  | 'seo.image.createdAt'
  | 'seo.image.description'
  | 'seo.image.file.contentType'
  | 'seo.image.file.fileName'
  | 'seo.image.file.url'
  | 'seo.image.filename'
  | 'seo.image.filesize'
  | 'seo.image.gatsbyImage'
  | 'seo.image.gatsbyImageData'
  | 'seo.image.height'
  | 'seo.image.id'
  | 'seo.image.internal.content'
  | 'seo.image.internal.contentDigest'
  | 'seo.image.internal.description'
  | 'seo.image.internal.fieldOwners'
  | 'seo.image.internal.ignoreType'
  | 'seo.image.internal.mediaType'
  | 'seo.image.internal.owner'
  | 'seo.image.internal.type'
  | 'seo.image.mimeType'
  | 'seo.image.node_locale'
  | 'seo.image.parent.children'
  | 'seo.image.parent.id'
  | 'seo.image.placeholderUrl'
  | 'seo.image.publicUrl'
  | 'seo.image.resize.height'
  | 'seo.image.resize.src'
  | 'seo.image.resize.width'
  | 'seo.image.spaceId'
  | 'seo.image.sys.revision'
  | 'seo.image.sys.type'
  | 'seo.image.title'
  | 'seo.image.updatedAt'
  | 'seo.image.url'
  | 'seo.image.width'
  | 'seo.internal.content'
  | 'seo.internal.contentDigest'
  | 'seo.internal.description'
  | 'seo.internal.fieldOwners'
  | 'seo.internal.ignoreType'
  | 'seo.internal.mediaType'
  | 'seo.internal.owner'
  | 'seo.internal.type'
  | 'seo.node_locale'
  | 'seo.page___blog_post'
  | 'seo.page___blog_post.author.children'
  | 'seo.page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'seo.page___blog_post.author.company'
  | 'seo.page___blog_post.author.contentful_id'
  | 'seo.page___blog_post.author.createdAt'
  | 'seo.page___blog_post.author.email'
  | 'seo.page___blog_post.author.facebook'
  | 'seo.page___blog_post.author.gatsbyPath'
  | 'seo.page___blog_post.author.github'
  | 'seo.page___blog_post.author.id'
  | 'seo.page___blog_post.author.name'
  | 'seo.page___blog_post.author.node_locale'
  | 'seo.page___blog_post.author.page___blog_post'
  | 'seo.page___blog_post.author.phone'
  | 'seo.page___blog_post.author.spaceId'
  | 'seo.page___blog_post.author.title'
  | 'seo.page___blog_post.author.twitter'
  | 'seo.page___blog_post.author.updatedAt'
  | 'seo.page___blog_post.body.body'
  | 'seo.page___blog_post.body.children'
  | 'seo.page___blog_post.body.childrenMarkdownRemark'
  | 'seo.page___blog_post.body.id'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'seo.page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'seo.page___blog_post.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'seo.page___blog_post.children.children'
  | 'seo.page___blog_post.children.id'
  | 'seo.page___blog_post.contentful_id'
  | 'seo.page___blog_post.createdAt'
  | 'seo.page___blog_post.description.children'
  | 'seo.page___blog_post.description.childrenMarkdownRemark'
  | 'seo.page___blog_post.description.description'
  | 'seo.page___blog_post.description.id'
  | 'seo.page___blog_post.heroImage.children'
  | 'seo.page___blog_post.heroImage.contentful_id'
  | 'seo.page___blog_post.heroImage.createdAt'
  | 'seo.page___blog_post.heroImage.description'
  | 'seo.page___blog_post.heroImage.filename'
  | 'seo.page___blog_post.heroImage.filesize'
  | 'seo.page___blog_post.heroImage.gatsbyImage'
  | 'seo.page___blog_post.heroImage.gatsbyImageData'
  | 'seo.page___blog_post.heroImage.height'
  | 'seo.page___blog_post.heroImage.id'
  | 'seo.page___blog_post.heroImage.mimeType'
  | 'seo.page___blog_post.heroImage.node_locale'
  | 'seo.page___blog_post.heroImage.placeholderUrl'
  | 'seo.page___blog_post.heroImage.publicUrl'
  | 'seo.page___blog_post.heroImage.spaceId'
  | 'seo.page___blog_post.heroImage.title'
  | 'seo.page___blog_post.heroImage.updatedAt'
  | 'seo.page___blog_post.heroImage.url'
  | 'seo.page___blog_post.heroImage.width'
  | 'seo.page___blog_post.id'
  | 'seo.page___blog_post.internal.content'
  | 'seo.page___blog_post.internal.contentDigest'
  | 'seo.page___blog_post.internal.description'
  | 'seo.page___blog_post.internal.fieldOwners'
  | 'seo.page___blog_post.internal.ignoreType'
  | 'seo.page___blog_post.internal.mediaType'
  | 'seo.page___blog_post.internal.owner'
  | 'seo.page___blog_post.internal.type'
  | 'seo.page___blog_post.node_locale'
  | 'seo.page___blog_post.parent.children'
  | 'seo.page___blog_post.parent.id'
  | 'seo.page___blog_post.publishDate'
  | 'seo.page___blog_post.seo.children'
  | 'seo.page___blog_post.seo.contentful_id'
  | 'seo.page___blog_post.seo.createdAt'
  | 'seo.page___blog_post.seo.description'
  | 'seo.page___blog_post.seo.id'
  | 'seo.page___blog_post.seo.node_locale'
  | 'seo.page___blog_post.seo.page___blog_post'
  | 'seo.page___blog_post.seo.robots'
  | 'seo.page___blog_post.seo.spaceId'
  | 'seo.page___blog_post.seo.title'
  | 'seo.page___blog_post.seo.updatedAt'
  | 'seo.page___blog_post.slug'
  | 'seo.page___blog_post.spaceId'
  | 'seo.page___blog_post.sys.revision'
  | 'seo.page___blog_post.sys.type'
  | 'seo.page___blog_post.tags'
  | 'seo.page___blog_post.title'
  | 'seo.page___blog_post.updatedAt'
  | 'seo.parent.children'
  | 'seo.parent.children.children'
  | 'seo.parent.children.id'
  | 'seo.parent.id'
  | 'seo.parent.internal.content'
  | 'seo.parent.internal.contentDigest'
  | 'seo.parent.internal.description'
  | 'seo.parent.internal.fieldOwners'
  | 'seo.parent.internal.ignoreType'
  | 'seo.parent.internal.mediaType'
  | 'seo.parent.internal.owner'
  | 'seo.parent.internal.type'
  | 'seo.parent.parent.children'
  | 'seo.parent.parent.id'
  | 'seo.robots'
  | 'seo.spaceId'
  | 'seo.sys.revision'
  | 'seo.sys.type'
  | 'seo.title'
  | 'seo.updatedAt'
  | 'slug'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'tags'
  | 'title'
  | 'updatedAt';

type ContentfulPageBlogPostFilterInput = {
  readonly author: InputMaybe<ContentfulEntityPersonFilterInput>;
  readonly body: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  readonly childContentfulPageBlogPostBodyTextNode: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  readonly childContentfulPageBlogPostDescriptionTextNode: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenContentfulPageBlogPostBodyTextNode: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterListInput>;
  readonly childrenContentfulPageBlogPostDescriptionTextNode: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  readonly heroImage: InputMaybe<ContentfulAssetFilterInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly publishDate: InputMaybe<DateQueryOperatorInput>;
  readonly seo: InputMaybe<ContentfulSeoFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulPageBlogPostSysFilterInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulPageBlogPostFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulPageBlogPostFilterInput>;
};

type ContentfulPageBlogPostGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageBlogPostEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPageBlogPostGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageBlogPost>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageBlogPostGroupConnection_distinctArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
};


type ContentfulPageBlogPostGroupConnection_groupArgs = {
  field: ContentfulPageBlogPostFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulPageBlogPostSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulPageBlogPostFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulPageBlogPostSys = {
  readonly contentType: Maybe<ContentfulPageBlogPostSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageBlogPostSysContentType = {
  readonly sys: Maybe<ContentfulPageBlogPostSysContentTypeSys>;
};

type ContentfulPageBlogPostSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulPageBlogPostSysContentTypeSysFilterInput>;
};

type ContentfulPageBlogPostSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageBlogPostSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageBlogPostSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulPageBlogPostSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageFlexPage = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly content: Maybe<ReadonlyArray<Maybe<ContentfulComponentCalloutContentfulComponentHeroContentfulComponentParagraphUnion>>>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly slug: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulPageFlexPageSys>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulPageFlexPage_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulPageFlexPage_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulPageFlexPageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageFlexPageEdge>;
  readonly group: ReadonlyArray<ContentfulPageFlexPageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageFlexPage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageFlexPageConnection_distinctArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageConnection_groupArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulPageFlexPageEdge = {
  readonly next: Maybe<ContentfulPageFlexPage>;
  readonly node: ContentfulPageFlexPage;
  readonly previous: Maybe<ContentfulPageFlexPage>;
};

type ContentfulPageFlexPageFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'slug'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'updatedAt';

type ContentfulPageFlexPageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulPageFlexPageSysFilterInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulPageFlexPageFilterListInput = {
  readonly elemMatch: InputMaybe<ContentfulPageFlexPageFilterInput>;
};

type ContentfulPageFlexPageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulPageFlexPageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPageFlexPageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulPageFlexPage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulPageFlexPageGroupConnection_distinctArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
};


type ContentfulPageFlexPageGroupConnection_groupArgs = {
  field: ContentfulPageFlexPageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulPageFlexPageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulPageFlexPageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulPageFlexPageSys = {
  readonly contentType: Maybe<ContentfulPageFlexPageSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageFlexPageSysContentType = {
  readonly sys: Maybe<ContentfulPageFlexPageSysContentTypeSys>;
};

type ContentfulPageFlexPageSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulPageFlexPageSysContentTypeSysFilterInput>;
};

type ContentfulPageFlexPageSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulPageFlexPageSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulPageFlexPageSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulPageFlexPageSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulSeo = ContentfulEntry & ContentfulReference & Node & {
  readonly children: ReadonlyArray<Node>;
  readonly contentful_id: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<ContentfulAsset>;
  readonly internal: Internal;
  readonly node_locale: Scalars['String'];
  readonly page___blog_post: Maybe<ReadonlyArray<Maybe<ContentfulPageBlogPost>>>;
  readonly parent: Maybe<Node>;
  readonly robots: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulSeoSys>;
  readonly title: Maybe<Scalars['String']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
};


type ContentfulSeo_createdAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type ContentfulSeo_updatedAtArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type ContentfulSeoConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSeoEdge>;
  readonly group: ReadonlyArray<ContentfulSeoGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSeo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulSeoConnection_distinctArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoConnection_groupArgs = {
  field: ContentfulSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulSeoEdge = {
  readonly next: Maybe<ContentfulSeo>;
  readonly node: ContentfulSeo;
  readonly previous: Maybe<ContentfulSeo>;
};

type ContentfulSeoFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'contentful_id'
  | 'createdAt'
  | 'description'
  | 'id'
  | 'image.children'
  | 'image.children.children'
  | 'image.children.children.children'
  | 'image.children.children.id'
  | 'image.children.id'
  | 'image.children.internal.content'
  | 'image.children.internal.contentDigest'
  | 'image.children.internal.description'
  | 'image.children.internal.fieldOwners'
  | 'image.children.internal.ignoreType'
  | 'image.children.internal.mediaType'
  | 'image.children.internal.owner'
  | 'image.children.internal.type'
  | 'image.children.parent.children'
  | 'image.children.parent.id'
  | 'image.contentful_id'
  | 'image.createdAt'
  | 'image.description'
  | 'image.file.contentType'
  | 'image.file.details.size'
  | 'image.file.fileName'
  | 'image.file.url'
  | 'image.filename'
  | 'image.filesize'
  | 'image.gatsbyImage'
  | 'image.gatsbyImageData'
  | 'image.height'
  | 'image.id'
  | 'image.internal.content'
  | 'image.internal.contentDigest'
  | 'image.internal.description'
  | 'image.internal.fieldOwners'
  | 'image.internal.ignoreType'
  | 'image.internal.mediaType'
  | 'image.internal.owner'
  | 'image.internal.type'
  | 'image.mimeType'
  | 'image.node_locale'
  | 'image.parent.children'
  | 'image.parent.children.children'
  | 'image.parent.children.id'
  | 'image.parent.id'
  | 'image.parent.internal.content'
  | 'image.parent.internal.contentDigest'
  | 'image.parent.internal.description'
  | 'image.parent.internal.fieldOwners'
  | 'image.parent.internal.ignoreType'
  | 'image.parent.internal.mediaType'
  | 'image.parent.internal.owner'
  | 'image.parent.internal.type'
  | 'image.parent.parent.children'
  | 'image.parent.parent.id'
  | 'image.placeholderUrl'
  | 'image.publicUrl'
  | 'image.resize.height'
  | 'image.resize.src'
  | 'image.resize.width'
  | 'image.spaceId'
  | 'image.sys.revision'
  | 'image.sys.type'
  | 'image.title'
  | 'image.updatedAt'
  | 'image.url'
  | 'image.width'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'node_locale'
  | 'page___blog_post'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.children'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.childrenMarkdownRemark'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.id'
  | 'page___blog_post.author.childrenContentfulEntityPersonShortBioTextNode.shortBio'
  | 'page___blog_post.author.children.children'
  | 'page___blog_post.author.children.id'
  | 'page___blog_post.author.company'
  | 'page___blog_post.author.contentful_id'
  | 'page___blog_post.author.createdAt'
  | 'page___blog_post.author.email'
  | 'page___blog_post.author.facebook'
  | 'page___blog_post.author.gatsbyPath'
  | 'page___blog_post.author.github'
  | 'page___blog_post.author.id'
  | 'page___blog_post.author.image.children'
  | 'page___blog_post.author.image.contentful_id'
  | 'page___blog_post.author.image.createdAt'
  | 'page___blog_post.author.image.description'
  | 'page___blog_post.author.image.filename'
  | 'page___blog_post.author.image.filesize'
  | 'page___blog_post.author.image.gatsbyImage'
  | 'page___blog_post.author.image.gatsbyImageData'
  | 'page___blog_post.author.image.height'
  | 'page___blog_post.author.image.id'
  | 'page___blog_post.author.image.mimeType'
  | 'page___blog_post.author.image.node_locale'
  | 'page___blog_post.author.image.placeholderUrl'
  | 'page___blog_post.author.image.publicUrl'
  | 'page___blog_post.author.image.spaceId'
  | 'page___blog_post.author.image.title'
  | 'page___blog_post.author.image.updatedAt'
  | 'page___blog_post.author.image.url'
  | 'page___blog_post.author.image.width'
  | 'page___blog_post.author.internal.content'
  | 'page___blog_post.author.internal.contentDigest'
  | 'page___blog_post.author.internal.description'
  | 'page___blog_post.author.internal.fieldOwners'
  | 'page___blog_post.author.internal.ignoreType'
  | 'page___blog_post.author.internal.mediaType'
  | 'page___blog_post.author.internal.owner'
  | 'page___blog_post.author.internal.type'
  | 'page___blog_post.author.name'
  | 'page___blog_post.author.node_locale'
  | 'page___blog_post.author.page___blog_post'
  | 'page___blog_post.author.page___blog_post.children'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.author.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.author.page___blog_post.contentful_id'
  | 'page___blog_post.author.page___blog_post.createdAt'
  | 'page___blog_post.author.page___blog_post.id'
  | 'page___blog_post.author.page___blog_post.node_locale'
  | 'page___blog_post.author.page___blog_post.publishDate'
  | 'page___blog_post.author.page___blog_post.slug'
  | 'page___blog_post.author.page___blog_post.spaceId'
  | 'page___blog_post.author.page___blog_post.tags'
  | 'page___blog_post.author.page___blog_post.title'
  | 'page___blog_post.author.page___blog_post.updatedAt'
  | 'page___blog_post.author.parent.children'
  | 'page___blog_post.author.parent.id'
  | 'page___blog_post.author.phone'
  | 'page___blog_post.author.shortBio.children'
  | 'page___blog_post.author.shortBio.childrenMarkdownRemark'
  | 'page___blog_post.author.shortBio.id'
  | 'page___blog_post.author.shortBio.shortBio'
  | 'page___blog_post.author.spaceId'
  | 'page___blog_post.author.sys.revision'
  | 'page___blog_post.author.sys.type'
  | 'page___blog_post.author.title'
  | 'page___blog_post.author.twitter'
  | 'page___blog_post.author.updatedAt'
  | 'page___blog_post.body.body'
  | 'page___blog_post.body.childMarkdownRemark.children'
  | 'page___blog_post.body.childMarkdownRemark.excerpt'
  | 'page___blog_post.body.childMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childMarkdownRemark.headings'
  | 'page___blog_post.body.childMarkdownRemark.html'
  | 'page___blog_post.body.childMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childMarkdownRemark.id'
  | 'page___blog_post.body.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childMarkdownRemark.timeToRead'
  | 'page___blog_post.body.children'
  | 'page___blog_post.body.childrenMarkdownRemark'
  | 'page___blog_post.body.childrenMarkdownRemark.children'
  | 'page___blog_post.body.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.body.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.body.childrenMarkdownRemark.headings'
  | 'page___blog_post.body.childrenMarkdownRemark.html'
  | 'page___blog_post.body.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.body.childrenMarkdownRemark.id'
  | 'page___blog_post.body.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.body.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.body.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.body.children.children'
  | 'page___blog_post.body.children.id'
  | 'page___blog_post.body.id'
  | 'page___blog_post.body.internal.content'
  | 'page___blog_post.body.internal.contentDigest'
  | 'page___blog_post.body.internal.description'
  | 'page___blog_post.body.internal.fieldOwners'
  | 'page___blog_post.body.internal.ignoreType'
  | 'page___blog_post.body.internal.mediaType'
  | 'page___blog_post.body.internal.owner'
  | 'page___blog_post.body.internal.type'
  | 'page___blog_post.body.parent.children'
  | 'page___blog_post.body.parent.id'
  | 'page___blog_post.body.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.body'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostBodyTextNode.sys.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.headings'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.html'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.children.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.content'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.contentDigest'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.description'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.fieldOwners'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.ignoreType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.mediaType'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.owner'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.internal.type'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.children'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.parent.id'
  | 'page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode.sys.type'
  | 'page___blog_post.children.children'
  | 'page___blog_post.children.children.children'
  | 'page___blog_post.children.children.id'
  | 'page___blog_post.children.id'
  | 'page___blog_post.children.internal.content'
  | 'page___blog_post.children.internal.contentDigest'
  | 'page___blog_post.children.internal.description'
  | 'page___blog_post.children.internal.fieldOwners'
  | 'page___blog_post.children.internal.ignoreType'
  | 'page___blog_post.children.internal.mediaType'
  | 'page___blog_post.children.internal.owner'
  | 'page___blog_post.children.internal.type'
  | 'page___blog_post.children.parent.children'
  | 'page___blog_post.children.parent.id'
  | 'page___blog_post.contentful_id'
  | 'page___blog_post.createdAt'
  | 'page___blog_post.description.childMarkdownRemark.children'
  | 'page___blog_post.description.childMarkdownRemark.excerpt'
  | 'page___blog_post.description.childMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childMarkdownRemark.headings'
  | 'page___blog_post.description.childMarkdownRemark.html'
  | 'page___blog_post.description.childMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childMarkdownRemark.id'
  | 'page___blog_post.description.childMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childMarkdownRemark.timeToRead'
  | 'page___blog_post.description.children'
  | 'page___blog_post.description.childrenMarkdownRemark'
  | 'page___blog_post.description.childrenMarkdownRemark.children'
  | 'page___blog_post.description.childrenMarkdownRemark.excerpt'
  | 'page___blog_post.description.childrenMarkdownRemark.excerptAst'
  | 'page___blog_post.description.childrenMarkdownRemark.headings'
  | 'page___blog_post.description.childrenMarkdownRemark.html'
  | 'page___blog_post.description.childrenMarkdownRemark.htmlAst'
  | 'page___blog_post.description.childrenMarkdownRemark.id'
  | 'page___blog_post.description.childrenMarkdownRemark.rawMarkdownBody'
  | 'page___blog_post.description.childrenMarkdownRemark.tableOfContents'
  | 'page___blog_post.description.childrenMarkdownRemark.timeToRead'
  | 'page___blog_post.description.children.children'
  | 'page___blog_post.description.children.id'
  | 'page___blog_post.description.description'
  | 'page___blog_post.description.id'
  | 'page___blog_post.description.internal.content'
  | 'page___blog_post.description.internal.contentDigest'
  | 'page___blog_post.description.internal.description'
  | 'page___blog_post.description.internal.fieldOwners'
  | 'page___blog_post.description.internal.ignoreType'
  | 'page___blog_post.description.internal.mediaType'
  | 'page___blog_post.description.internal.owner'
  | 'page___blog_post.description.internal.type'
  | 'page___blog_post.description.parent.children'
  | 'page___blog_post.description.parent.id'
  | 'page___blog_post.description.sys.type'
  | 'page___blog_post.heroImage.children'
  | 'page___blog_post.heroImage.children.children'
  | 'page___blog_post.heroImage.children.id'
  | 'page___blog_post.heroImage.contentful_id'
  | 'page___blog_post.heroImage.createdAt'
  | 'page___blog_post.heroImage.description'
  | 'page___blog_post.heroImage.file.contentType'
  | 'page___blog_post.heroImage.file.fileName'
  | 'page___blog_post.heroImage.file.url'
  | 'page___blog_post.heroImage.filename'
  | 'page___blog_post.heroImage.filesize'
  | 'page___blog_post.heroImage.gatsbyImage'
  | 'page___blog_post.heroImage.gatsbyImageData'
  | 'page___blog_post.heroImage.height'
  | 'page___blog_post.heroImage.id'
  | 'page___blog_post.heroImage.internal.content'
  | 'page___blog_post.heroImage.internal.contentDigest'
  | 'page___blog_post.heroImage.internal.description'
  | 'page___blog_post.heroImage.internal.fieldOwners'
  | 'page___blog_post.heroImage.internal.ignoreType'
  | 'page___blog_post.heroImage.internal.mediaType'
  | 'page___blog_post.heroImage.internal.owner'
  | 'page___blog_post.heroImage.internal.type'
  | 'page___blog_post.heroImage.mimeType'
  | 'page___blog_post.heroImage.node_locale'
  | 'page___blog_post.heroImage.parent.children'
  | 'page___blog_post.heroImage.parent.id'
  | 'page___blog_post.heroImage.placeholderUrl'
  | 'page___blog_post.heroImage.publicUrl'
  | 'page___blog_post.heroImage.resize.height'
  | 'page___blog_post.heroImage.resize.src'
  | 'page___blog_post.heroImage.resize.width'
  | 'page___blog_post.heroImage.spaceId'
  | 'page___blog_post.heroImage.sys.revision'
  | 'page___blog_post.heroImage.sys.type'
  | 'page___blog_post.heroImage.title'
  | 'page___blog_post.heroImage.updatedAt'
  | 'page___blog_post.heroImage.url'
  | 'page___blog_post.heroImage.width'
  | 'page___blog_post.id'
  | 'page___blog_post.internal.content'
  | 'page___blog_post.internal.contentDigest'
  | 'page___blog_post.internal.description'
  | 'page___blog_post.internal.fieldOwners'
  | 'page___blog_post.internal.ignoreType'
  | 'page___blog_post.internal.mediaType'
  | 'page___blog_post.internal.owner'
  | 'page___blog_post.internal.type'
  | 'page___blog_post.node_locale'
  | 'page___blog_post.parent.children'
  | 'page___blog_post.parent.children.children'
  | 'page___blog_post.parent.children.id'
  | 'page___blog_post.parent.id'
  | 'page___blog_post.parent.internal.content'
  | 'page___blog_post.parent.internal.contentDigest'
  | 'page___blog_post.parent.internal.description'
  | 'page___blog_post.parent.internal.fieldOwners'
  | 'page___blog_post.parent.internal.ignoreType'
  | 'page___blog_post.parent.internal.mediaType'
  | 'page___blog_post.parent.internal.owner'
  | 'page___blog_post.parent.internal.type'
  | 'page___blog_post.parent.parent.children'
  | 'page___blog_post.parent.parent.id'
  | 'page___blog_post.publishDate'
  | 'page___blog_post.seo.children'
  | 'page___blog_post.seo.children.children'
  | 'page___blog_post.seo.children.id'
  | 'page___blog_post.seo.contentful_id'
  | 'page___blog_post.seo.createdAt'
  | 'page___blog_post.seo.description'
  | 'page___blog_post.seo.id'
  | 'page___blog_post.seo.image.children'
  | 'page___blog_post.seo.image.contentful_id'
  | 'page___blog_post.seo.image.createdAt'
  | 'page___blog_post.seo.image.description'
  | 'page___blog_post.seo.image.filename'
  | 'page___blog_post.seo.image.filesize'
  | 'page___blog_post.seo.image.gatsbyImage'
  | 'page___blog_post.seo.image.gatsbyImageData'
  | 'page___blog_post.seo.image.height'
  | 'page___blog_post.seo.image.id'
  | 'page___blog_post.seo.image.mimeType'
  | 'page___blog_post.seo.image.node_locale'
  | 'page___blog_post.seo.image.placeholderUrl'
  | 'page___blog_post.seo.image.publicUrl'
  | 'page___blog_post.seo.image.spaceId'
  | 'page___blog_post.seo.image.title'
  | 'page___blog_post.seo.image.updatedAt'
  | 'page___blog_post.seo.image.url'
  | 'page___blog_post.seo.image.width'
  | 'page___blog_post.seo.internal.content'
  | 'page___blog_post.seo.internal.contentDigest'
  | 'page___blog_post.seo.internal.description'
  | 'page___blog_post.seo.internal.fieldOwners'
  | 'page___blog_post.seo.internal.ignoreType'
  | 'page___blog_post.seo.internal.mediaType'
  | 'page___blog_post.seo.internal.owner'
  | 'page___blog_post.seo.internal.type'
  | 'page___blog_post.seo.node_locale'
  | 'page___blog_post.seo.page___blog_post'
  | 'page___blog_post.seo.page___blog_post.children'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostBodyTextNode'
  | 'page___blog_post.seo.page___blog_post.childrenContentfulPageBlogPostDescriptionTextNode'
  | 'page___blog_post.seo.page___blog_post.contentful_id'
  | 'page___blog_post.seo.page___blog_post.createdAt'
  | 'page___blog_post.seo.page___blog_post.id'
  | 'page___blog_post.seo.page___blog_post.node_locale'
  | 'page___blog_post.seo.page___blog_post.publishDate'
  | 'page___blog_post.seo.page___blog_post.slug'
  | 'page___blog_post.seo.page___blog_post.spaceId'
  | 'page___blog_post.seo.page___blog_post.tags'
  | 'page___blog_post.seo.page___blog_post.title'
  | 'page___blog_post.seo.page___blog_post.updatedAt'
  | 'page___blog_post.seo.parent.children'
  | 'page___blog_post.seo.parent.id'
  | 'page___blog_post.seo.robots'
  | 'page___blog_post.seo.spaceId'
  | 'page___blog_post.seo.sys.revision'
  | 'page___blog_post.seo.sys.type'
  | 'page___blog_post.seo.title'
  | 'page___blog_post.seo.updatedAt'
  | 'page___blog_post.slug'
  | 'page___blog_post.spaceId'
  | 'page___blog_post.sys.revision'
  | 'page___blog_post.sys.type'
  | 'page___blog_post.tags'
  | 'page___blog_post.title'
  | 'page___blog_post.updatedAt'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'robots'
  | 'spaceId'
  | 'sys.contentType.sys.id'
  | 'sys.contentType.sys.linkType'
  | 'sys.contentType.sys.type'
  | 'sys.revision'
  | 'sys.type'
  | 'title'
  | 'updatedAt';

type ContentfulSeoFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly contentful_id: InputMaybe<StringQueryOperatorInput>;
  readonly createdAt: InputMaybe<DateQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<ContentfulAssetFilterInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly node_locale: InputMaybe<StringQueryOperatorInput>;
  readonly page___blog_post: InputMaybe<ContentfulPageBlogPostFilterListInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly robots: InputMaybe<StringQueryOperatorInput>;
  readonly spaceId: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<ContentfulSeoSysFilterInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
  readonly updatedAt: InputMaybe<DateQueryOperatorInput>;
};

type ContentfulSeoGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ContentfulSeoEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulSeoGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ContentfulSeo>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ContentfulSeoGroupConnection_distinctArgs = {
  field: ContentfulSeoFieldsEnum;
};


type ContentfulSeoGroupConnection_groupArgs = {
  field: ContentfulSeoFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ContentfulSeoSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ContentfulSeoFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ContentfulSeoSys = {
  readonly contentType: Maybe<ContentfulSeoSysContentType>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulSeoSysContentType = {
  readonly sys: Maybe<ContentfulSeoSysContentTypeSys>;
};

type ContentfulSeoSysContentTypeFilterInput = {
  readonly sys: InputMaybe<ContentfulSeoSysContentTypeSysFilterInput>;
};

type ContentfulSeoSysContentTypeSys = {
  readonly id: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulSeoSysContentTypeSysFilterInput = {
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly linkType: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type ContentfulSeoSysFilterInput = {
  readonly contentType: InputMaybe<ContentfulSeoSysContentTypeFilterInput>;
  readonly revision: InputMaybe<IntQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type DirectorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'childImageSharp.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.id'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.original.width'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'children'
  | 'childrenImageSharp'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type FileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | 'NO_CHANGE'
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageCropFocus =
  | 17
  | 'CENTER'
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | 'AUTO'
  | 'avif'
  | 'jpg'
  | 'NO_CHANGE'
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageResizingBehavior =
  /** Crop a part of the original image to match the specified size. */
  | 'crop'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'fill'
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'pad'
  /** Scale the image regardless of the original aspect ratio. */
  | 'scale'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'thumb';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'fixed.aspectRatio'
  | 'fixed.base64'
  | 'fixed.height'
  | 'fixed.originalName'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcSetWebp'
  | 'fixed.srcWebp'
  | 'fixed.tracedSVG'
  | 'fixed.width'
  | 'fluid.aspectRatio'
  | 'fluid.base64'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationHeight'
  | 'fluid.presentationWidth'
  | 'fluid.sizes'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcSetWebp'
  | 'fluid.srcWebp'
  | 'fluid.tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'original.height'
  | 'original.src'
  | 'original.width'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'resize.aspectRatio'
  | 'resize.height'
  | 'resize.originalName'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width';

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
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

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

type MarkdownExcerptFormats =
  | 'HTML'
  | 'MARKDOWN'
  | 'PLAIN';

type MarkdownHeading = {
  readonly depth: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
};

type MarkdownHeadingFilterInput = {
  readonly depth: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly value: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownHeadingFilterInput>;
};

type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

type MarkdownRemark = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
};


type MarkdownRemark_excerptArgs = {
  format?: InputMaybe<MarkdownExcerptFormats>;
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>;
  truncate?: InputMaybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: InputMaybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>;
  heading: InputMaybe<Scalars['String']>;
  maxDepth: InputMaybe<Scalars['Int']>;
  pathToSlugField?: InputMaybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'excerpt'
  | 'excerptAst'
  | 'frontmatter.title'
  | 'headings'
  | 'headings.depth'
  | 'headings.id'
  | 'headings.value'
  | 'html'
  | 'htmlAst'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'rawMarkdownBody'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount.paragraphs'
  | 'wordCount.sentences'
  | 'wordCount.words';

type MarkdownRemarkFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly excerpt: InputMaybe<StringQueryOperatorInput>;
  readonly excerptAst: InputMaybe<JSONQueryOperatorInput>;
  readonly frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly headings: InputMaybe<MarkdownHeadingFilterListInput>;
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly htmlAst: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  readonly tableOfContents: InputMaybe<StringQueryOperatorInput>;
  readonly timeToRead: InputMaybe<IntQueryOperatorInput>;
  readonly wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};

type MarkdownRemarkFilterListInput = {
  readonly elemMatch: InputMaybe<MarkdownRemarkFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type MarkdownRemarkGroupConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkGroupConnection_groupArgs = {
  field: MarkdownRemarkFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type MarkdownRemarkSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: InputMaybe<IntQueryOperatorInput>;
  readonly sentences: InputMaybe<IntQueryOperatorInput>;
  readonly words: InputMaybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type Query = {
  readonly allBrewery: BreweryConnection;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly allContentfulComponentCallout: ContentfulComponentCalloutConnection;
  readonly allContentfulComponentCalloutBodyTextNode: contentfulComponentCalloutBodyTextNodeConnection;
  readonly allContentfulComponentCarousel: ContentfulComponentCarouselConnection;
  readonly allContentfulComponentFooter: ContentfulComponentFooterConnection;
  readonly allContentfulComponentHero: ContentfulComponentHeroConnection;
  readonly allContentfulComponentNavigation: ContentfulComponentNavigationConnection;
  readonly allContentfulComponentParagraph: ContentfulComponentParagraphConnection;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly allContentfulEntityPerson: ContentfulEntityPersonConnection;
  readonly allContentfulEntityPersonShortBioTextNode: contentfulEntityPersonShortBioTextNodeConnection;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly allContentfulLink: ContentfulLinkConnection;
  readonly allContentfulPageBlogPost: ContentfulPageBlogPostConnection;
  readonly allContentfulPageBlogPostBodyTextNode: contentfulPageBlogPostBodyTextNodeConnection;
  readonly allContentfulPageBlogPostDescriptionTextNode: contentfulPageBlogPostDescriptionTextNodeConnection;
  readonly allContentfulPageFlexPage: ContentfulPageFlexPageConnection;
  readonly allContentfulSeo: ContentfulSeoConnection;
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly brewery: Maybe<Brewery>;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly contentfulComponentCallout: Maybe<ContentfulComponentCallout>;
  readonly contentfulComponentCalloutBodyTextNode: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly contentfulComponentCarousel: Maybe<ContentfulComponentCarousel>;
  readonly contentfulComponentFooter: Maybe<ContentfulComponentFooter>;
  readonly contentfulComponentHero: Maybe<ContentfulComponentHero>;
  readonly contentfulComponentNavigation: Maybe<ContentfulComponentNavigation>;
  readonly contentfulComponentParagraph: Maybe<ContentfulComponentParagraph>;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly contentfulEntityPerson: Maybe<ContentfulEntityPerson>;
  readonly contentfulEntityPersonShortBioTextNode: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly contentfulLink: Maybe<ContentfulLink>;
  readonly contentfulPageBlogPost: Maybe<ContentfulPageBlogPost>;
  readonly contentfulPageBlogPostBodyTextNode: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly contentfulPageBlogPostDescriptionTextNode: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly contentfulPageFlexPage: Maybe<ContentfulPageFlexPage>;
  readonly contentfulSeo: Maybe<ContentfulSeo>;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


type Query_allBreweryArgs = {
  filter: InputMaybe<BreweryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<BrewerySortInput>;
};


type Query_allContentfulAssetArgs = {
  filter: InputMaybe<ContentfulAssetFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulAssetSortInput>;
};


type Query_allContentfulComponentCalloutArgs = {
  filter: InputMaybe<ContentfulComponentCalloutFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentCalloutSortInput>;
};


type Query_allContentfulComponentCalloutBodyTextNodeArgs = {
  filter: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<contentfulComponentCalloutBodyTextNodeSortInput>;
};


type Query_allContentfulComponentCarouselArgs = {
  filter: InputMaybe<ContentfulComponentCarouselFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentCarouselSortInput>;
};


type Query_allContentfulComponentFooterArgs = {
  filter: InputMaybe<ContentfulComponentFooterFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentFooterSortInput>;
};


type Query_allContentfulComponentHeroArgs = {
  filter: InputMaybe<ContentfulComponentHeroFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentHeroSortInput>;
};


type Query_allContentfulComponentNavigationArgs = {
  filter: InputMaybe<ContentfulComponentNavigationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentNavigationSortInput>;
};


type Query_allContentfulComponentParagraphArgs = {
  filter: InputMaybe<ContentfulComponentParagraphFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulComponentParagraphSortInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: InputMaybe<ContentfulContentTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulContentTypeSortInput>;
};


type Query_allContentfulEntityPersonArgs = {
  filter: InputMaybe<ContentfulEntityPersonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulEntityPersonSortInput>;
};


type Query_allContentfulEntityPersonShortBioTextNodeArgs = {
  filter: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<contentfulEntityPersonShortBioTextNodeSortInput>;
};


type Query_allContentfulEntryArgs = {
  filter: InputMaybe<ContentfulEntryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulEntrySortInput>;
};


type Query_allContentfulLinkArgs = {
  filter: InputMaybe<ContentfulLinkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulLinkSortInput>;
};


type Query_allContentfulPageBlogPostArgs = {
  filter: InputMaybe<ContentfulPageBlogPostFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulPageBlogPostSortInput>;
};


type Query_allContentfulPageBlogPostBodyTextNodeArgs = {
  filter: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<contentfulPageBlogPostBodyTextNodeSortInput>;
};


type Query_allContentfulPageBlogPostDescriptionTextNodeArgs = {
  filter: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<contentfulPageBlogPostDescriptionTextNodeSortInput>;
};


type Query_allContentfulPageFlexPageArgs = {
  filter: InputMaybe<ContentfulPageFlexPageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulPageFlexPageSortInput>;
};


type Query_allContentfulSeoArgs = {
  filter: InputMaybe<ContentfulSeoFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ContentfulSeoSortInput>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: InputMaybe<MarkdownRemarkFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<MarkdownRemarkSortInput>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


type Query_breweryArgs = {
  brewery_type: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  city: InputMaybe<StringQueryOperatorInput>;
  country: InputMaybe<StringQueryOperatorInput>;
  created_at: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  latitude: InputMaybe<StringQueryOperatorInput>;
  longitude: InputMaybe<StringQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  postal_code: InputMaybe<StringQueryOperatorInput>;
  state: InputMaybe<StringQueryOperatorInput>;
  street: InputMaybe<StringQueryOperatorInput>;
  updated_at: InputMaybe<DateQueryOperatorInput>;
  website_url: InputMaybe<StringQueryOperatorInput>;
};


type Query_contentfulAssetArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  file: InputMaybe<ContentfulAssetFileFilterInput>;
  filename: InputMaybe<StringQueryOperatorInput>;
  filesize: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage: InputMaybe<JSONQueryOperatorInput>;
  gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  height: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mimeType: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  placeholderUrl: InputMaybe<StringQueryOperatorInput>;
  publicUrl: InputMaybe<StringQueryOperatorInput>;
  resize: InputMaybe<RemoteFileResizeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulAssetSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
  width: InputMaybe<IntQueryOperatorInput>;
};


type Query_contentfulComponentCalloutArgs = {
  body: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  childContentfulComponentCalloutBodyTextNode: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulComponentCalloutBodyTextNode: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  heading: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulComponentCalloutSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulComponentCalloutBodyTextNodeArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulComponentCalloutBodyTextNodeSysFilterInput>;
};


type Query_contentfulComponentCarouselArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_contentfulComponentFooterArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<ContentfulComponentFooterContentFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulComponentFooterSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulComponentHeroArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<StringQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulComponentHeroSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulComponentNavigationArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  links: InputMaybe<ContentfulLinkFilterListInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulComponentNavigationSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulComponentParagraphArgs = {
  children: InputMaybe<NodeFilterListInput>;
  content: InputMaybe<ContentfulComponentParagraphContentFilterInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  page___flex_page: InputMaybe<ContentfulPageFlexPageFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulComponentParagraphSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulContentTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  displayField: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<ContentfulContentTypeSysFilterInput>;
};


type Query_contentfulEntityPersonArgs = {
  childContentfulEntityPersonShortBioTextNode: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulEntityPersonShortBioTextNode: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterListInput>;
  company: InputMaybe<StringQueryOperatorInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  facebook: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath: InputMaybe<StringQueryOperatorInput>;
  github: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  page___blog_post: InputMaybe<ContentfulPageBlogPostFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  phone: InputMaybe<StringQueryOperatorInput>;
  shortBio: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulEntityPersonSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  twitter: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulEntityPersonShortBioTextNodeArgs = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  shortBio: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<contentfulEntityPersonShortBioTextNodeSysFilterInput>;
};


type Query_contentfulEntryArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_contentfulLinkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component___navigation: InputMaybe<ContentfulComponentNavigationFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulLinkSysFilterInput>;
  text: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulPageBlogPostArgs = {
  author: InputMaybe<ContentfulEntityPersonFilterInput>;
  body: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  childContentfulPageBlogPostBodyTextNode: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
  childContentfulPageBlogPostDescriptionTextNode: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenContentfulPageBlogPostBodyTextNode: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterListInput>;
  childrenContentfulPageBlogPostDescriptionTextNode: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
  heroImage: InputMaybe<ContentfulAssetFilterInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  publishDate: InputMaybe<DateQueryOperatorInput>;
  seo: InputMaybe<ContentfulSeoFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulPageBlogPostSysFilterInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulPageBlogPostBodyTextNodeArgs = {
  body: InputMaybe<StringQueryOperatorInput>;
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulPageBlogPostBodyTextNodeSysFilterInput>;
};


type Query_contentfulPageBlogPostDescriptionTextNodeArgs = {
  childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  sys: InputMaybe<contentfulPageBlogPostDescriptionTextNodeSysFilterInput>;
};


type Query_contentfulPageFlexPageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  slug: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulPageFlexPageSysFilterInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_contentfulSeoArgs = {
  children: InputMaybe<NodeFilterListInput>;
  contentful_id: InputMaybe<StringQueryOperatorInput>;
  createdAt: InputMaybe<DateQueryOperatorInput>;
  description: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<ContentfulAssetFilterInput>;
  internal: InputMaybe<InternalFilterInput>;
  node_locale: InputMaybe<StringQueryOperatorInput>;
  page___blog_post: InputMaybe<ContentfulPageBlogPostFilterListInput>;
  parent: InputMaybe<NodeFilterInput>;
  robots: InputMaybe<StringQueryOperatorInput>;
  spaceId: InputMaybe<StringQueryOperatorInput>;
  sys: InputMaybe<ContentfulSeoSysFilterInput>;
  title: InputMaybe<StringQueryOperatorInput>;
  updatedAt: InputMaybe<DateQueryOperatorInput>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_markdownRemarkArgs = {
  children: InputMaybe<NodeFilterListInput>;
  excerpt: InputMaybe<StringQueryOperatorInput>;
  excerptAst: InputMaybe<JSONQueryOperatorInput>;
  frontmatter: InputMaybe<MarkdownRemarkFrontmatterFilterInput>;
  headings: InputMaybe<MarkdownHeadingFilterListInput>;
  html: InputMaybe<StringQueryOperatorInput>;
  htmlAst: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  rawMarkdownBody: InputMaybe<StringQueryOperatorInput>;
  tableOfContents: InputMaybe<StringQueryOperatorInput>;
  timeToRead: InputMaybe<IntQueryOperatorInput>;
  wordCount: InputMaybe<MarkdownWordCountFilterInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

/** Remote Interface */
type RemoteFile = {
  readonly filename: Scalars['String'];
  readonly filesize: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  readonly gatsbyImage: Maybe<Scalars['JSON']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly mimeType: Scalars['String'];
  readonly publicUrl: Scalars['String'];
  readonly resize: Maybe<RemoteFileResize>;
  readonly width: Maybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_gatsbyImageArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<ReadonlyArray<RemoteFileFormat>>;
  height: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
type RemoteFile_resizeArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  cropFocus: InputMaybe<ReadonlyArray<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type RemoteFileCropFocus =
  | 'bottom'
  | 'center'
  | 'edges'
  | 'entropy'
  | 'faces'
  | 'left'
  | 'right'
  | 'top';

type RemoteFileFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'outside';

type RemoteFileFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | 'png'
  | 'webp';

type RemoteFileLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type RemoteFilePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none';

type RemoteFileResize = {
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type RemoteFileResizeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteBuildMetadataSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'jsxRuntime'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pathPrefix'
  | 'polyfill'
  | 'siteMetadata.description'
  | 'siteMetadata.title'
  | 'trailingSlash';

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'functionRoute'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteFunctionSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'pageContext'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.id'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.name'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.resolve'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.version';

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePluginSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type contentfulComponentCalloutBodyTextNode = Node & {
  readonly body: Maybe<Scalars['String']>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulComponentCalloutBodyTextNodeSys>;
};

type contentfulComponentCalloutBodyTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulComponentCalloutBodyTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulComponentCalloutBodyTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulComponentCalloutBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulComponentCalloutBodyTextNodeConnection_distinctArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeConnection_groupArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulComponentCalloutBodyTextNodeEdge = {
  readonly next: Maybe<contentfulComponentCalloutBodyTextNode>;
  readonly node: contentfulComponentCalloutBodyTextNode;
  readonly previous: Maybe<contentfulComponentCalloutBodyTextNode>;
};

type contentfulComponentCalloutBodyTextNodeFieldsEnum =
  | 'body'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'children'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'sys.type';

type contentfulComponentCalloutBodyTextNodeFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulComponentCalloutBodyTextNodeSysFilterInput>;
};

type contentfulComponentCalloutBodyTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulComponentCalloutBodyTextNodeFilterInput>;
};

type contentfulComponentCalloutBodyTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulComponentCalloutBodyTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulComponentCalloutBodyTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulComponentCalloutBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
};


type contentfulComponentCalloutBodyTextNodeGroupConnection_groupArgs = {
  field: contentfulComponentCalloutBodyTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulComponentCalloutBodyTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<contentfulComponentCalloutBodyTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type contentfulComponentCalloutBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulComponentCalloutBodyTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulEntityPersonShortBioTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly shortBio: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulEntityPersonShortBioTextNodeSys>;
};

type contentfulEntityPersonShortBioTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulEntityPersonShortBioTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulEntityPersonShortBioTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulEntityPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulEntityPersonShortBioTextNodeConnection_distinctArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeConnection_groupArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulEntityPersonShortBioTextNodeEdge = {
  readonly next: Maybe<contentfulEntityPersonShortBioTextNode>;
  readonly node: contentfulEntityPersonShortBioTextNode;
  readonly previous: Maybe<contentfulEntityPersonShortBioTextNode>;
};

type contentfulEntityPersonShortBioTextNodeFieldsEnum =
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'children'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'shortBio'
  | 'sys.type';

type contentfulEntityPersonShortBioTextNodeFilterInput = {
  readonly childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly shortBio: InputMaybe<StringQueryOperatorInput>;
  readonly sys: InputMaybe<contentfulEntityPersonShortBioTextNodeSysFilterInput>;
};

type contentfulEntityPersonShortBioTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulEntityPersonShortBioTextNodeFilterInput>;
};

type contentfulEntityPersonShortBioTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulEntityPersonShortBioTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulEntityPersonShortBioTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulEntityPersonShortBioTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_distinctArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
};


type contentfulEntityPersonShortBioTextNodeGroupConnection_groupArgs = {
  field: contentfulEntityPersonShortBioTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulEntityPersonShortBioTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<contentfulEntityPersonShortBioTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type contentfulEntityPersonShortBioTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulEntityPersonShortBioTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulPageBlogPostBodyTextNode = Node & {
  readonly body: Maybe<Scalars['String']>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulPageBlogPostBodyTextNodeSys>;
};

type contentfulPageBlogPostBodyTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulPageBlogPostBodyTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulPageBlogPostBodyTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulPageBlogPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeConnection_groupArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulPageBlogPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulPageBlogPostBodyTextNode>;
  readonly node: contentfulPageBlogPostBodyTextNode;
  readonly previous: Maybe<contentfulPageBlogPostBodyTextNode>;
};

type contentfulPageBlogPostBodyTextNodeFieldsEnum =
  | 'body'
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'children'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'sys.type';

type contentfulPageBlogPostBodyTextNodeFilterInput = {
  readonly body: InputMaybe<StringQueryOperatorInput>;
  readonly childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulPageBlogPostBodyTextNodeSysFilterInput>;
};

type contentfulPageBlogPostBodyTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulPageBlogPostBodyTextNodeFilterInput>;
};

type contentfulPageBlogPostBodyTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulPageBlogPostBodyTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostBodyTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_distinctArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
};


type contentfulPageBlogPostBodyTextNodeGroupConnection_groupArgs = {
  field: contentfulPageBlogPostBodyTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulPageBlogPostBodyTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<contentfulPageBlogPostBodyTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type contentfulPageBlogPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPageBlogPostBodyTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type contentfulPageBlogPostDescriptionTextNode = Node & {
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly sys: Maybe<contentfulPageBlogPostDescriptionTextNodeSys>;
};

type contentfulPageBlogPostDescriptionTextNodeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeEdge>;
  readonly group: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulPageBlogPostDescriptionTextNodeConnection_distinctArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeConnection_groupArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulPageBlogPostDescriptionTextNodeEdge = {
  readonly next: Maybe<contentfulPageBlogPostDescriptionTextNode>;
  readonly node: contentfulPageBlogPostDescriptionTextNode;
  readonly previous: Maybe<contentfulPageBlogPostDescriptionTextNode>;
};

type contentfulPageBlogPostDescriptionTextNodeFieldsEnum =
  | 'childMarkdownRemark.children'
  | 'childMarkdownRemark.children.children'
  | 'childMarkdownRemark.children.children.children'
  | 'childMarkdownRemark.children.children.id'
  | 'childMarkdownRemark.children.id'
  | 'childMarkdownRemark.children.internal.content'
  | 'childMarkdownRemark.children.internal.contentDigest'
  | 'childMarkdownRemark.children.internal.description'
  | 'childMarkdownRemark.children.internal.fieldOwners'
  | 'childMarkdownRemark.children.internal.ignoreType'
  | 'childMarkdownRemark.children.internal.mediaType'
  | 'childMarkdownRemark.children.internal.owner'
  | 'childMarkdownRemark.children.internal.type'
  | 'childMarkdownRemark.children.parent.children'
  | 'childMarkdownRemark.children.parent.id'
  | 'childMarkdownRemark.excerpt'
  | 'childMarkdownRemark.excerptAst'
  | 'childMarkdownRemark.frontmatter.title'
  | 'childMarkdownRemark.headings'
  | 'childMarkdownRemark.headings.depth'
  | 'childMarkdownRemark.headings.id'
  | 'childMarkdownRemark.headings.value'
  | 'childMarkdownRemark.html'
  | 'childMarkdownRemark.htmlAst'
  | 'childMarkdownRemark.id'
  | 'childMarkdownRemark.internal.content'
  | 'childMarkdownRemark.internal.contentDigest'
  | 'childMarkdownRemark.internal.description'
  | 'childMarkdownRemark.internal.fieldOwners'
  | 'childMarkdownRemark.internal.ignoreType'
  | 'childMarkdownRemark.internal.mediaType'
  | 'childMarkdownRemark.internal.owner'
  | 'childMarkdownRemark.internal.type'
  | 'childMarkdownRemark.parent.children'
  | 'childMarkdownRemark.parent.children.children'
  | 'childMarkdownRemark.parent.children.id'
  | 'childMarkdownRemark.parent.id'
  | 'childMarkdownRemark.parent.internal.content'
  | 'childMarkdownRemark.parent.internal.contentDigest'
  | 'childMarkdownRemark.parent.internal.description'
  | 'childMarkdownRemark.parent.internal.fieldOwners'
  | 'childMarkdownRemark.parent.internal.ignoreType'
  | 'childMarkdownRemark.parent.internal.mediaType'
  | 'childMarkdownRemark.parent.internal.owner'
  | 'childMarkdownRemark.parent.internal.type'
  | 'childMarkdownRemark.parent.parent.children'
  | 'childMarkdownRemark.parent.parent.id'
  | 'childMarkdownRemark.rawMarkdownBody'
  | 'childMarkdownRemark.tableOfContents'
  | 'childMarkdownRemark.timeToRead'
  | 'childMarkdownRemark.wordCount.paragraphs'
  | 'childMarkdownRemark.wordCount.sentences'
  | 'childMarkdownRemark.wordCount.words'
  | 'children'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark.children'
  | 'childrenMarkdownRemark.children.children'
  | 'childrenMarkdownRemark.children.children.children'
  | 'childrenMarkdownRemark.children.children.id'
  | 'childrenMarkdownRemark.children.id'
  | 'childrenMarkdownRemark.children.internal.content'
  | 'childrenMarkdownRemark.children.internal.contentDigest'
  | 'childrenMarkdownRemark.children.internal.description'
  | 'childrenMarkdownRemark.children.internal.fieldOwners'
  | 'childrenMarkdownRemark.children.internal.ignoreType'
  | 'childrenMarkdownRemark.children.internal.mediaType'
  | 'childrenMarkdownRemark.children.internal.owner'
  | 'childrenMarkdownRemark.children.internal.type'
  | 'childrenMarkdownRemark.children.parent.children'
  | 'childrenMarkdownRemark.children.parent.id'
  | 'childrenMarkdownRemark.excerpt'
  | 'childrenMarkdownRemark.excerptAst'
  | 'childrenMarkdownRemark.frontmatter.title'
  | 'childrenMarkdownRemark.headings'
  | 'childrenMarkdownRemark.headings.depth'
  | 'childrenMarkdownRemark.headings.id'
  | 'childrenMarkdownRemark.headings.value'
  | 'childrenMarkdownRemark.html'
  | 'childrenMarkdownRemark.htmlAst'
  | 'childrenMarkdownRemark.id'
  | 'childrenMarkdownRemark.internal.content'
  | 'childrenMarkdownRemark.internal.contentDigest'
  | 'childrenMarkdownRemark.internal.description'
  | 'childrenMarkdownRemark.internal.fieldOwners'
  | 'childrenMarkdownRemark.internal.ignoreType'
  | 'childrenMarkdownRemark.internal.mediaType'
  | 'childrenMarkdownRemark.internal.owner'
  | 'childrenMarkdownRemark.internal.type'
  | 'childrenMarkdownRemark.parent.children'
  | 'childrenMarkdownRemark.parent.children.children'
  | 'childrenMarkdownRemark.parent.children.id'
  | 'childrenMarkdownRemark.parent.id'
  | 'childrenMarkdownRemark.parent.internal.content'
  | 'childrenMarkdownRemark.parent.internal.contentDigest'
  | 'childrenMarkdownRemark.parent.internal.description'
  | 'childrenMarkdownRemark.parent.internal.fieldOwners'
  | 'childrenMarkdownRemark.parent.internal.ignoreType'
  | 'childrenMarkdownRemark.parent.internal.mediaType'
  | 'childrenMarkdownRemark.parent.internal.owner'
  | 'childrenMarkdownRemark.parent.internal.type'
  | 'childrenMarkdownRemark.parent.parent.children'
  | 'childrenMarkdownRemark.parent.parent.id'
  | 'childrenMarkdownRemark.rawMarkdownBody'
  | 'childrenMarkdownRemark.tableOfContents'
  | 'childrenMarkdownRemark.timeToRead'
  | 'childrenMarkdownRemark.wordCount.paragraphs'
  | 'childrenMarkdownRemark.wordCount.sentences'
  | 'childrenMarkdownRemark.wordCount.words'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'description'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'sys.type';

type contentfulPageBlogPostDescriptionTextNodeFilterInput = {
  readonly childMarkdownRemark: InputMaybe<MarkdownRemarkFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenMarkdownRemark: InputMaybe<MarkdownRemarkFilterListInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly sys: InputMaybe<contentfulPageBlogPostDescriptionTextNodeSysFilterInput>;
};

type contentfulPageBlogPostDescriptionTextNodeFilterListInput = {
  readonly elemMatch: InputMaybe<contentfulPageBlogPostDescriptionTextNodeFilterInput>;
};

type contentfulPageBlogPostDescriptionTextNodeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulPageBlogPostDescriptionTextNodeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<contentfulPageBlogPostDescriptionTextNode>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_distinctArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
};


type contentfulPageBlogPostDescriptionTextNodeGroupConnection_groupArgs = {
  field: contentfulPageBlogPostDescriptionTextNodeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type contentfulPageBlogPostDescriptionTextNodeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<contentfulPageBlogPostDescriptionTextNodeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type contentfulPageBlogPostDescriptionTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPageBlogPostDescriptionTextNodeSysFilterInput = {
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type BlogIndexQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BlogIndexQueryQuery = { readonly allContentfulPageBlogPost: { readonly nodes: ReadonlyArray<{ readonly title: string | undefined, readonly slug: string | undefined, readonly publishDate: string | undefined, readonly tags: ReadonlyArray<string | undefined> | undefined, readonly heroImage: { readonly gatsbyImageData: any | undefined } | undefined, readonly description: { readonly childMarkdownRemark: { readonly html: string | undefined } | undefined } | undefined }> } };

type HomeQueryQueryVariables = Exact<{ [key: string]: never; }>;


type HomeQueryQuery = { readonly allContentfulPageBlogPost: { readonly nodes: ReadonlyArray<{ readonly title: string | undefined, readonly slug: string | undefined, readonly publishDate: string | undefined, readonly tags: ReadonlyArray<string | undefined> | undefined, readonly heroImage: { readonly gatsbyImageData: any | undefined } | undefined, readonly description: { readonly childMarkdownRemark: { readonly html: string | undefined } | undefined } | undefined }> }, readonly contentfulEntityPerson: { readonly name: string | undefined, readonly title: string | undefined, readonly shortBio: { readonly shortBio: string | undefined } | undefined, readonly image: { readonly gatsbyImageData: any | undefined } | undefined } | undefined };

type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: InputMaybe<Scalars['String']>;
  nextPostSlug: InputMaybe<Scalars['String']>;
}>;


type BlogPostBySlugQuery = { readonly contentfulPageBlogPost: { readonly slug: string | undefined, readonly title: string | undefined, readonly publishDate: string | undefined, readonly tags: ReadonlyArray<string | undefined> | undefined, readonly rawDate: string | undefined, readonly author: { readonly name: string | undefined } | undefined, readonly heroImage: { readonly gatsbyImageData: any | undefined, readonly resize: { readonly src: string | undefined } | undefined } | undefined, readonly body: { readonly childMarkdownRemark: { readonly html: string | undefined, readonly timeToRead: number | undefined } | undefined } | undefined, readonly description: { readonly childMarkdownRemark: { readonly excerpt: string | undefined } | undefined } | undefined } | undefined, readonly previous: { readonly slug: string | undefined, readonly title: string | undefined } | undefined, readonly next: { readonly slug: string | undefined, readonly title: string | undefined } | undefined };

type BadBlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
  previousPostSlug: InputMaybe<Scalars['String']>;
  nextPostSlug: InputMaybe<Scalars['String']>;
}>;


type BadBlogPostBySlugQuery = { readonly contentfulPageBlogPost: { readonly slug: string | undefined, readonly title: string | undefined, readonly publishDate: string | undefined, readonly tags: ReadonlyArray<string | undefined> | undefined, readonly rawDate: string | undefined, readonly author: { readonly name: string | undefined } | undefined, readonly heroImage: { readonly resize: { readonly src: string | undefined } | undefined, readonly file: { readonly url: string | undefined } | undefined } | undefined, readonly body: { readonly childMarkdownRemark: { readonly html: string | undefined, readonly timeToRead: number | undefined } | undefined } | undefined, readonly description: { readonly childMarkdownRemark: { readonly excerpt: string | undefined } | undefined } | undefined } | undefined, readonly previous: { readonly slug: string | undefined, readonly title: string | undefined } | undefined, readonly next: { readonly slug: string | undefined, readonly title: string | undefined } | undefined };

type FlexPageBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type FlexPageBySlugQuery = { readonly contentfulPageFlexPage: { readonly slug: string | undefined, readonly content: ReadonlyArray<{ readonly heading: string | undefined, readonly internal: { readonly type: string }, readonly body: { readonly body: string | undefined } | undefined } | { readonly title: string | undefined, readonly internal: { readonly type: string }, readonly image: { readonly gatsbyImageData: any | undefined } | undefined } | { readonly title: string | undefined, readonly internal: { readonly type: string }, readonly content: { readonly raw: string | undefined } | undefined } | undefined> | undefined } | undefined };


}
