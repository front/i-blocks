/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, /*components,*/ editor } from 'wp';

/**
 * Internal dependencies
 */
// import './editor.scss';


const { Fragment } = element;
const { __ } = i18n;

// TODO: Chooose components for the sidebar settings
// const { PanelBody, FontSizePicker } = components;
const { InspectorControls, /*PanelColorSettings,*/ RichText } = editor;

// TODO: Add here the editable block attributes
const BLOCK_ATTRIBUTES = {
  backgroundImage: {
    type: 'string',
    default: 'https://1.cms.s81c.com/sites/default/files/2018-09-13/leadspace_nogrid.jpg',
  },
  backgroundImageData: {
    type: 'object',
    default: {},
  },
  title: {
    type: 'array',
    source: 'children',
    selector: 'h1',
    default: 'IBM Blockchain.<br/>Now delivering value around the world.',
  },
  teaser: {
    type: 'array',
    source: 'children',
    selector: 'p',
    default: 'From frictionless supply chains to food we can really trust, learn how industries are revolutionizing business with IBM Blockchain. Let’s put smart to work.™',
  },
};

export const name = 'hero';

export const settings = {
  title: __('Hero Banner'),

  description: __('Hero container with a background image'),

  icon: 'cover-image',

  attributes: BLOCK_ATTRIBUTES,

  edit ({ attributes, setAttributes }) {
    const { backgroundImage, backgroundImageData, title, teaser } = attributes;
    const containerStyle = {
      backgroundImage: `url('${backgroundImage}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div id="ibm-leadspace-head" style={ containerStyle } className="ibm-background-systems-blue-80 ibm-leadspace-fluid ibm-no-border" { ...backgroundImageData }>
          <div id="ibm-leadspace-body" className="ibm-padding-top-2 ibm-padding-bottom-2">
            <div className="ibm-fluid ibm-padding-bottom-0">
              <div className="ibm-col-medium-12-6 ibm-col-12-6 ">
                <RichText
                  tagName="h1"
                  className="ibm-h1 ibm-textcolor-white-core ibm-padding-bottom-0 ibm-padding-top-1"
                  id="ibm-pagetitle-h1"
                  value={ title }
                  placeholder="Title"
                  wrapper="span"
                  onChange={ value => setAttributes({ title: value }) }
                  inlineToolbar
                />

                <RichText
                  tagName="p"
                  className="ibm-h4 ibm-light ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                  value={ teaser }
                  placeholder="Teaser"
                  wrapper="span"
                  onChange={ value => setAttributes({ teaser: value }) }
                  inlineToolbar
                />
              </div>
            </div>
          </div>
        </div>

        <InspectorControls>
          {/* Block settings (sidebar) */}
        </InspectorControls>
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
                className="ibm-h1 ibm-textcolor-white-core ibm-padding-bottom-0 ibm-padding-top-1"
                id="ibm-pagetitle-h1"
                value={ title } />
              <RichText.Content
                tagName="p"
                className="ibm-h4 ibm-light ibm-textcolor-white-core ibm-padding-top-1 ibm-padding-bottom-1"
                value={ teaser } />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
