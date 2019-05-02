/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

/**
 * Internal dependencies
 */
import './editor.scss';

const { Fragment } = element;
const { __ } = i18n;

const { PanelBody, TextControl } = components;
const { InnerBlocks, InspectorControls, RichText } = editor;

// Template options
const ALLOWED_BLOCKS = [
  'ibm/button',
];

const TEMPLATE = [
  ['ibm/button', {
    text: 'Try the new version of the leading blockchain for business platform',
    link: '#1635596',
    style: 'ibm-forward-link',
  }],
];

// TODO: Add here the editable block attributes
const BLOCK_ATTRIBUTES = {
  title: {
    type: 'array',
    source: 'children',
    selector: 'h2',
    default: 'New: IBM Blockchain Platform Free 2.0 Beta',
  },
  blockId: {
    type: 'string',
    default: '1596131',
  },
};

export const name = 'cta-row';

export const settings = {
  title: __('CTA row'),

  description: __('CTA row'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  supports: {
    className: false,
  },

  edit ({ attributes, setAttributes }) {
    const { title, blockId } = attributes;

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div className="ibm-band ibm-background-systems-blue-60 ibm-textcolor-default ibm-padding-top-0 ibm-padding-bottom-1" id={ blockId } >
          <div className="ibm-fluid ibm-padding-bottom-0">
            <div>
              <div className="ibm-col-12-3 ibm-col-medium-12-12 ">
                {/* Title */}
                <RichText
                  tagName="h2"
                  className="ibm-h2 ibm-h3-small ibm-padding-top-1 ibm-padding-bottom-0 ibm-textcolor-white-core"
                  value={ title }
                  placeholder="Title"
                  onChange={ value => setAttributes({ title: value }) }
                  formattingControls={ ['bold', 'italic', 'strikethrough'] }
                  inlineToolbar
                />
              </div>

              <div className="ibm-col-12-6 ibm-col-medium-12-10 ">
                {/* Buttons */}
                <div className="ibm-ind-link ibm-padding-top-1 ibm-padding-bottom-0">
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

              <div className="ibm-col-12-3 ibm-col-medium-12-5 "></div>
            </div>
          </div>
        </div>

        <InspectorControls>
          <PanelBody title={ __('Extra') } initialOpen={ false }>
            <TextControl
              label={ __('Block id') }
              value={ blockId }
              onChange={ value => setAttributes({ blockId: value }) }
              help={ __('Optional. It can be usefull for anchor links') }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },

  save ({ attributes }) {
    const { title, blockId } = attributes;

    return (
      <div className="ibm-band ibm-background-systems-blue-60 ibm-textcolor-default ibm-padding-top-0 ibm-padding-bottom-1" id={ blockId } >
        <div className="ibm-fluid ibm-padding-bottom-0">
          <div>
            <div className="ibm-col-12-3 ibm-col-medium-12-12 ">
              {/* Title */}
              <RichText.Content
                tagName="h2"
                className="ibm-h2 ibm-h3-small ibm-padding-top-1 ibm-padding-bottom-0 ibm-textcolor-white-core"
                value={ title }
              />
            </div>

            <div className="ibm-col-12-6 ibm-col-medium-12-10 ">
              {/* Buttons */}
              <div className="ibm-ind-link ibm-padding-top-1 ibm-padding-bottom-0">
                <p className="ibm-btn-row ibm-ind-link">
                  <InnerBlocks.Content />
                </p>
              </div>
            </div>

            <div className="ibm-col-12-3 ibm-col-medium-12-5 "></div>
          </div>
        </div>
      </div>
    );
  },
};
