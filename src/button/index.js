/**
 * External dependencies
 */
import React from 'react';
import { element, i18n, components, editor } from 'wp';

const { Fragment } = element;
const { __ } = i18n;

// TODO: Chooose components for the sidebar settings
const { Dashicon, IconButton, PanelBody, SelectControl } = components;
const { InspectorControls, RichText, URLInput } = editor;

const STYLES = [
  { value: '', label: 'Default' },
  { value: 'ibm-download-link', label: 'Download' },
  { value: 'ibm-forward-link', label: 'Forward arrow' },
];

// TODO: Add here the editable block attributes
const BLOCK_ATTRIBUTES = {
  text: {
    type: 'array',
    source: 'children',
    selector: 'span',
    default: 'Button text',
  },
  link: {
    type: 'string',
    default: '',
  },
  style: {
    type: 'string',
    default: 'ibm-forward-link',
  },
};

export const name = 'button';

export const settings = {
  title: __('IBM Button'),

  description: __('Hero container with a background image'),

  icon: 'share-alt2',

  attributes: BLOCK_ATTRIBUTES,

  supports: {
    className: false,
  },

  edit ({ attributes, setAttributes, isSelected }) {
    const { text, link, style } = attributes;

    return (
      <Fragment>
        {/* Block markup (main editor) */}
        <div className={`${style} ibm-textcolor-white-core ibm-padding-content ibm-padding-bottom-0`}>
          <RichText
            tagName="span"
            value={ text }
            placeholder="Button text"
            onChange={ value => setAttributes({ text: value }) }
            keepPlaceholderOnFocus
          />
        </div>

        { isSelected && (
          <form
            className="block-library-button__inline-link"
            onSubmit={ event => event.preventDefault() }>
            <Dashicon icon="admin-links" />
            <URLInput
              value={ link }
              onChange={ value => setAttributes({ link: value }) }
            />
            <IconButton icon="editor-break" label={ __('Apply') } type="submit" />
          </form>
        ) }

        <InspectorControls>
          {/* Block settings (sidebar) */}
          <PanelBody title={ __('Settings') }>
            <SelectControl
              label={ __('Button style') }
              value={ style }
              onChange={ value => setAttributes({ style: value }) }
              options={ STYLES }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  },

  save ({ attributes }) {
    const { text, link, style } = attributes;

    return (
      <a href={link} className={`${style} ibm-textcolor-white-core ibm-padding-content ibm-padding-bottom-0`}>
        <RichText.Content
          tagName="span"
          value={ text }
        />
      </a>
    );
  },
};
