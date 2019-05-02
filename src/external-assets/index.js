/**
 * External dependencies
 */
import React from 'react';
import { element, i18n } from 'wp';

const { Fragment } = element;
const { __ } = i18n;


export const name = 'external-assets';

export const settings = {
  title: __('Styles And Scripts'),
  description: __('Import the css styles and js scripts for Nordic Innovation'),
  icon: 'editor-code',

  attributes: {},

  edit () {
    const style = {
      padding: '5px 0',
      backgroundColor: '#F0F0F0',
      fontSize: '12px',
      textAlign: 'center',
    };
    return (
      <Fragment>
        <div style={ style }>Styles and Scripts</div>
        <link rel="stylesheet" href="//1.cms.s81c.com/sites/default/files/css/css_2mWlM7uzLsX26o3-VPopAEsrrqZCpfeSCocID4Z5OGs.css?pqpdq2" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/www.css" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/tables.css" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/grid-fluid.css" media="all" />
        <link rel="stylesheet" href="//1.cms.s81c.com/sites/default/files/css/css_EneiLCH2C7OvkDxQNoz70doseF_bb-0-hJL5DCnDePI.css?pqpdq2" media="all" />
      </Fragment>
    );
  },

  save () {
    return (
      <Fragment>
        <link rel="stylesheet" href="//1.cms.s81c.com/sites/default/files/css/css_2mWlM7uzLsX26o3-VPopAEsrrqZCpfeSCocID4Z5OGs.css?pqpdq2" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/www.css" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/tables.css" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/grid-fluid.css" media="all" />
        <link rel="stylesheet" href="//1.cms.s81c.com/sites/default/files/css/css_EneiLCH2C7OvkDxQNoz70doseF_bb-0-hJL5DCnDePI.css?pqpdq2" media="all" />
      </Fragment>
    );
  },
};
