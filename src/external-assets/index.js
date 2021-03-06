/**
 * External dependencies
 */
import React from 'react';
import { element, i18n } from 'wp';

const { Fragment } = element;
const { __ } = i18n;

export const name = 'external-assets';

// Adding body class (g-editor)
document.body.classList.add('ibm-type');

export const settings = {
  title: __('Styles And Scripts'),
  description: __('Import the css styles and js scripts for IBM'),
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
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/www.css" media="all" />
        <link rel="stylesheet" href="//1.www.s81c.com/common/v18/css/grid-fluid.css" media="all" />
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

        <script src="//1.cms.s81c.com/sites/default/files/js/js_2MaHvduQMY5hz7cqy9JvqV2FJV7tqpaVAHahYFcV8Vo.js"></script>
        <script src="//1.www.s81c.com/common/stats/ida_stats.js" async=""></script>
        <script src="//1.www.s81c.com/common/v18/js/www.js" defer=""></script>
        <script src="//1.www.s81c.com/common/v18/js/dyntabs.js" defer=""></script>
        <script src="//1.www.s81c.com/common/v18/js/tables.js" defer=""></script>
        <script src="//1.www.s81c.com/common/js/tactic.js" defer=""></script>
        <script src="//1.www.s81c.com/common/js/tacticbindlinks.js" defer=""></script>
      </Fragment>
    );
  },
};
