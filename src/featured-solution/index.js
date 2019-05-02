/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import { parseVideo, getVideoThumb, getMediaAttrs } from '../helpers';
import './editor.scss';

const { Fragment } = element;
const { __ } = i18n;

const {
  BaseControl,
  Button,
  Dashicon,
  IconButton,
  PanelBody,
  Toolbar,
} = components;

const {
  BlockControls,
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  RichText,
  URLInput,
} = editor;

// Template options
const ALLOWED_BLOCKS = [
  'ibm/button',
];

const TEMPLATE = [
  ['ibm/button', {
    text: 'See latest news',
    link: '//www.ibm.com/blockchain/news-and-events',
    style: 'ibm-forward-link',
  }],
  ['ibm/button', {
    text: 'What is blockchain?',
    link: '//www.ibm.com/blockchain/what-is-blockchain',
    style: 'ibm-forward-link',
  }],
];

// TODO: Add here the editable block attributes
const BLOCK_ATTRIBUTES = {
  backgroundImage: {
    type: 'string',
    default: '//1.cms.s81c.com/sites/default/files/2019-02-12/band%203%20video%20background.jpg',
  },
  backgroundImageId: {
    type: 'number',
  },
  backgroundImageData: {
    type: 'object',
    default: {},
  },
  title: {
    type: 'array',
    source: 'children',
    selector: 'h2',
    default: 'Turning talk into tangible business outcomes',
  },
  teaser: {
    type: 'string',
    source: 'html',
    multiline: 'p',
    selector: 'div.ibm-textcolor-white-core.ibm-padding-top-1.ibm-padding-bottom-1',
    default: '<p>Each day, forward-thinking companies are transforming blockchain’s promise into bottom-line business results. And they’re doing it with IBM Blockchain.</p><p>But building and deploying enterprise blockchain solutions continues to be larger than any one business can tackle on its own. Discover how IBM Blockchain can help you bring together allies across departments and disciplines, industries and organizations, and countries and cultures.</p>',
  },
  video: {
    type: 'string',
    default: '//www.youtube-nocookie.com/embed/xZrFVw3OSps?autoplay=1&amp;hl=en-us&amp;iv_load_policy=3&amp;listType=playlist&amp;origin=https%3A%2F%2Fwww.ibm.com&amp;rel=0&amp;showinfo=1&amp;controls=1&amp;modestbranding=0&amp;theme=dark&amp;enablejsapi=1&amp;widgetid=1',
  },
  videoCaption: {
    type: 'string',
    source: 'text',
    selector: '.ibm-video-title p',
    default: 'IBM Blockchain: transforming businesses, industries – and even the world',
  },
  videoThumb: {
    type: 'string',
    default: '//1.cms.s81c.com/sites/default/files/2019-02-12/band%203_Video_thumbnail.jpg',
  },
  videoData: {
    type: 'object',
    default: {
      'data-widget': 'videoplayer',
      'data-videodisplay': 'overlayandtrigger',
      'data-videotype': 'youtube',
      'data-videoid': 'xZrFVw3OSps',
      'data-kaltura-fallbackid': '1_8oazhg1j',
      'data-overlayplayersize': 'medium',
      'data-showvideoduration': 'false',
      'data-imagesize': 'large',
      'data-videotitleoverride': 'IBM Blockchain: transforming businesses, industries – and even the world',
      'data-customplaceholder': 'true',
    },
  },
};

const DEFAULT_THUMB = '//placeimg.com/470/265/nature/grayscale';

export const name = 'featured-solution';

export const settings = {
  title: __('Featured Solution'),

  description: __('Featured Solution with a video'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  supports: {
    anchor: true,
    className: false,
  },

  edit ({ attributes, setAttributes }) {
    const {
      backgroundImage, backgroundImageId, backgroundImageData, title, teaser,
      video, videoCaption, videoThumb, videoThumbId, videoData,
    } = attributes;

    const containerStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%;',
    };

    // const vData = video && parseVideo(video);
    // const thumb = videoThumb || (vData && getVideoThumb(vData.provider, vData.id)) || DEFAULT_THUMB;
    const thumb = videoThumb || DEFAULT_THUMB;

    const onSelectBackgroundImage = image => {
      setAttributes({
        backgroundImage: image.url,
        backgroundImageId: image.id,
        backgroundImageData: getMediaAttrs(image),
      });
    };

    const onSelectVideoThumb = image => {
      setAttributes({
        videoThumb: image.url,
        videoThumbId: image.id,
      });
    };

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div style={ containerStyle } className="ibm-band-background-image ibm-band ibm-background-black-core ibm-textcolor-white-core ibm-padding-top-2 ibm-padding-bottom-0" { ...backgroundImageData }>
          <div className="ibm-fluid">
            <div className="ibm-col-12-6 ">
              {/* Title */}
              <RichText
                tagName="h2"
                className="ibm-h2 ibm-h3-small ibm-padding-top-1 ibm-padding-bottom-1 ibm-textcolor-white-core"
                value={ title }
                placeholder="Title"
                onChange={ value => setAttributes({ title: value }) }
                formattingControls={ ['bold', 'italic', 'strikethrough'] }
                inlineToolbar
              />

              {/* Teaser */}
              <RichText
                tagName="div"
                className="ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                value={ teaser }
                placeholder="Teaser"
                onChange={ value => setAttributes({ teaser: value }) }
                formattingControls={ ['bold', 'italic', 'strikethrough'] }
                inlineToolbar
                multiline="p"
              />

              {/* Buttons (TODO: button-list block)*/}
              <div className="ibm-button-link ibm-btn-row ibm-ind-link ibm-padding-top-1 ibm-padding-bottom-1">
                <p className="ibm-btn-row ibm-ind-link">
                  <InnerBlocks
                    template={ TEMPLATE }
                    allowedBlocks={ ALLOWED_BLOCKS }
                    templateInsertUpdatesSelection={ false }
                    templateLock="insert"
                  />
                </p>
              </div>
            </div>

            <div className="ibm-col-12-6 ">
              <div className="ibm-padding-top-1 ibm-padding-bottom-1 ibm-video-player-con" { ...videoData }>
                <div>
                  <div className="ibm-video-placeholder">
                    <span className="ibm-play-link"></span>
                    <img src={ thumb } alt={ videoCaption } className="ibm-resize" />
                  </div>
                  <form
                    className="block-library-button__inline-link"
                    onSubmit={ event => event.preventDefault() }>
                    <Dashicon icon="admin-links" />
                    <URLInput
                      value={ video }
                      onChange={ value => setAttributes({ video: value }) }
                    />
                    <IconButton icon="editor-break" label={ __('Apply') } type="submit" />
                  </form>
                </div>
                <div className="ibm-video-title ibm-bold">
                  <RichText
                    tagName="p"
                    value={ videoCaption }
                    className="ibm-padding-bottom-0"
                    placeholder="Caption"
                    onChange={ value => setAttributes({ videoCaption: value }) }
                    formattingControls={ [] }
                    inlineToolbar
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <InspectorControls>
          <PanelBody title={ __('Settings') }>
            <BaseControl label={ __('Background Image') }>
              <MediaUpload
                onSelect={ onSelectBackgroundImage }
                allowedTypes={ ['image'] }
                value={ backgroundImageId }
                render={ ({ open }) => (
                  <Button
                    isPrimary
                    onClick={ open }
                  >{ __('Choose image') }</Button>
                ) }
              />
            </BaseControl>

            <BaseControl label={ __('Video Thumbnail') }>
              <MediaUpload
                onSelect={ onSelectVideoThumb }
                allowedTypes={ ['image'] }
                value={ videoThumbId }
                render={ ({ open }) => (
                  <Button
                    isPrimary
                    onClick={ open }
                  >{ __('Choose image') }</Button>
                ) }
              />
            </BaseControl>
          </PanelBody>
        </InspectorControls>

        <BlockControls>
          <Toolbar>
            <MediaUpload
              onSelect={ onSelectBackgroundImage }
              allowedTypes={ ['image'] }
              value={ backgroundImageId }
              render={ ({ open }) => (
                <IconButton
                  className="components-toolbar__control"
                  label={ __('Edit background image') }
                  icon="edit"
                  onClick={ open }
                />
              ) }
            />

            <MediaUpload
              onSelect={ onSelectVideoThumb }
              allowedTypes={ ['image'] }
              value={ videoThumbId }
              render={ ({ open }) => (
                <IconButton
                  className="components-toolbar__control"
                  label={ __('Edit video thumbnail') }
                  icon="edit"
                  onClick={ open }
                />
              ) }
            />
          </Toolbar>
        </BlockControls>
      </Fragment>
    );
  },

  save ({ attributes }) {
    const {
      backgroundImage, backgroundImageData, title, teaser, video, videoCaption,
      videoThumb, videoData,
    } = attributes;
    const containerStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%;',
    };

    const vData = video && parseVideo(video);
    const thumb = videoThumb || (vData && getVideoThumb(vData.provider, vData.id)) || DEFAULT_THUMB;

    return (
      <Fragment>
        <div style={ containerStyle } className="ibm-band-background-image ibm-band ibm-background-black-core ibm-textcolor-white-core ibm-padding-top-2 ibm-padding-bottom-0" { ...backgroundImageData }>
          <div className="ibm-fluid">
            <div className="ibm-col-12-6 ">
              {/* Title */}
              <RichText.Content
                tagName="h2"
                className="ibm-h2 ibm-h3-small ibm-padding-top-1 ibm-padding-bottom-1 ibm-textcolor-white-core"
                value={ title }
              />

              {/* Teaser */}
              <RichText.Content
                tagName="div"
                className="ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                value={ teaser }
              />

              {/* Buttons */}
              <div className="ibm-button-link ibm-btn-row ibm-ind-link ibm-padding-top-1 ibm-padding-bottom-1">
                <p className="ibm-btn-row ibm-ind-link">
                  <InnerBlocks.Content />
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="ibm-col-12-6 ">
              <div className="ibm-padding-top-1 ibm-padding-bottom-1 ibm-video-player-con" { ...videoData }>
                <div>
                  <a href={ video } className="ibm-video-placeholder" aria-label={ `${vData.provider}: ${videoCaption}` }>
                    <span className="ibm-play-link"></span>
                    <img src={ thumb } alt={ videoCaption } className="ibm-resize" />
                  </a>
                </div>
                <div className="ibm-video-title ibm-bold">
                  <RichText.Content
                    tagName="p"
                    value={ videoCaption }
                    className="ibm-padding-bottom-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        { /* Overlay */ }
        <div className="ibm-overlay-backdrop"></div>
        <div className="ibm-common-overlay ibm-overlay-alt ibm-video-overlay seamless ibm-overlay-text-white" id="ibm-overlaywidget-1" role="dialog" aria-describedby="ibm-overlaywidget-1-content" aria-label="Overlay content" data-widget="overlay container" data-name style="background-color: rgb(0, 0, 0); z-index: 920;">
          <div className="ibm-overlay-heading-con">
            <p className="ibm-icononly">
              <a href="javascript:void(0);" className="ibm-close-link" role="button">{ __('Close') }</a>
            </p>
          </div>
          <div id="ibm-overlaywidget-1-content" className="content hidexscroll">
            <div className="ibm-dynid-1-tmpcon"></div>
          </div>
        </div>
      </Fragment>
    );
  },
};
