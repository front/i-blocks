/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import { getMediaAttrs } from '../helpers';
import './editor.scss';

const { Fragment } = element;
const { __ } = i18n;

const {
  BaseControl,
  Button,
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
} = editor;

// Template options
const ALLOWED_BLOCKS = [
  'ibm/button',
];

const TEMPLATE = [
  ['ibm/button', {
    text: 'What’s your potential blockchain ROI?',
    link: '#1417566',
    style: 'ibm-download-link',
  }],
  ['ibm/button', {
    text: 'Create now with IBM Blockchain Platform',
    link: '//www.ibm.com/blockchain/platform',
    style: 'ibm-forward-link',
  }],
];

// TODO: Add here the editable block attributes
const BLOCK_ATTRIBUTES = {
  backgroundImage: {
    type: 'string',
    default: '//1.cms.s81c.com/sites/default/files/2018-09-13/leadspace_nogrid.jpg',
  },
  backgroundImageId: {
    type: 'number',
  },
  backgroundImageData: {
    type: 'object',
    default: {},
  },
  title: {
    type: 'string',
    source: 'html',
    selector: 'h1',
    default: '<span>IBM Blockchain.<br>Now delivering value around the world.</span>',
  },
  teaser: {
    type: 'string',
    source: 'html',
    selector: 'p',
    default: '<span>From frictionless supply chains to food we can really trust, learn how industries are revolutionizing business with IBM Blockchain. Let’s put smart to work.™</span>',
  },
};

export const name = 'hero';

export const settings = {
  title: __('Hero'),

  description: __('Hero container with a background image'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  supports: {
    className: false,
  },

  edit ({ attributes, setAttributes }) {
    const {
      backgroundImage, backgroundImageId, backgroundImageData, title, teaser,
    } = attributes;

    const containerStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    const onSelectImage = image => {
      setAttributes({
        backgroundImage: image.url,
        backgroundImageId: image.id,
        backgroundImageData: getMediaAttrs(image),
      });
    };

    const onChangeTitle = newTitle => {
      const hasSpan = newTitle.startsWith('<span>');

      setAttributes({
        title: hasSpan ? newTitle : `<span>${newTitle}</span>`,
      });
    };

    const onChangeTeaser = newTeaser => {
      const hasSpan = newTeaser.startsWith('<span>');

      setAttributes({
        teaser: hasSpan ? newTeaser : `<span>${newTeaser}</span>`,
      });
    };

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div id="ibm-leadspace-head" style={ containerStyle } className="ibm-background-systems-blue-80 ibm-leadspace-fluid ibm-no-border" { ...backgroundImageData }>
          <div id="ibm-leadspace-body" className="ibm-padding-top-2 ibm-padding-bottom-2">
            <div className="ibm-fluid ibm-padding-bottom-0">
              <div className="ibm-col-medium-12-6 ibm-col-12-6 ">
                {/* Title */}
                <RichText
                  tagName="h1"
                  id="ibm-pagetitle-h1"
                  className="ibm-h1 ibm-textcolor-white-core ibm-padding-bottom-0 ibm-padding-top-1"
                  value={ title }
                  placeholder="Title"
                  onChange={ onChangeTitle }
                  formattingControls={ ['bold', 'italic', 'strikethrough'] }
                  inlineToolbar
                />

                {/* Teaser */}
                <RichText
                  tagName="p"
                  value={ teaser }
                  className="ibm-h4 ibm-light ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                  placeholder="Teaser"
                  onChange={ onChangeTeaser }
                  formattingControls={ ['bold', 'italic', 'strikethrough'] }
                  inlineToolbar
                />

                {/* Buttons (TODO: button-list block)*/}
                <div className="ibm-padding-top-1 ibm-padding-bottom-1">
                  <p className="ibm-button-link ibm-btn-row ibm-ind-link">
                    <InnerBlocks
                      template={ TEMPLATE }
                      allowedBlocks={ ALLOWED_BLOCKS }
                      templateInsertUpdatesSelection={ false }
                      templateLock="insert"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InspectorControls>
          <PanelBody title={ __('Settings') }>
            <BaseControl label={ __('Background Image') }>
              <MediaUpload
                onSelect={ onSelectImage }
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
          </PanelBody>
        </InspectorControls>

        <BlockControls>
          <Toolbar>
            <MediaUpload
              onSelect={ onSelectImage }
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
          </Toolbar>
        </BlockControls>
      </Fragment>
    );
  },

  save ({ attributes }) {
    const { backgroundImage, backgroundImageData, title, teaser } = attributes;
    const containerStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <div id="ibm-leadspace-head" style={ containerStyle } className="ibm-background-systems-blue-80 ibm-leadspace-fluid ibm-no-border" { ...backgroundImageData }>
        <div id="ibm-leadspace-body" className="ibm-padding-top-2 ibm-padding-bottom-2">
          <div className="ibm-fluid ibm-padding-bottom-0">
            <div className="ibm-col-medium-12-6 ibm-col-12-6 ">
              <RichText.Content
                tagName="h1"
                id="ibm-pagetitle-h1"
                className="ibm-h1 ibm-textcolor-white-core ibm-padding-bottom-0 ibm-padding-top-1"
                value={ title } />

              <RichText.Content
                tagName="p"
                className="ibm-h4 ibm-light ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                value={ teaser } />

              <div className="ibm-padding-top-1 ibm-padding-bottom-1">
                <p className="ibm-button-link ibm-btn-row ibm-ind-link">
                  <InnerBlocks.Content />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
