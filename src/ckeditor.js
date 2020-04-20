/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
// @ckeditor/ckeditor5-editor-classic @ckeditor/ckeditor5-essentials @ckeditor/ckeditor5-paragraph @ckeditor/ckeditor5-autoformat @ckeditor/ckeditor5-paste-from-office @ckeditor/ckeditor5-remove-format @ckeditor/ckeditor5-heading @ckeditor/ckeditor5-basic-styles @ckeditor/ckeditor5-link @ckeditor/ckeditor5-code-block @ckeditor/ckeditor5-list @ckeditor/ckeditor5-alignment @ckeditor/ckeditor5-indent @ckeditor/ckeditor5-image @ckeditor/ckeditor5-media-embed @ckeditor/ckeditor5-block-quote @ckeditor/ckeditor5-table @ckeditor/ckeditor5-horizontal-line @ckeditor/ckeditor5-page-break @ckeditor/ckeditor5-font 

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';

import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';

import Link from '@ckeditor/ckeditor5-link/src/link';

import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';

import List from '@ckeditor/ckeditor5-list/src/list';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';

import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';

import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';

import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';

import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';


export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Paragraph,
	Autoformat,
	PasteFromOffice,

	RemoveFormat,
	Heading,

	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,

	Link,

	CodeBlock,

	List,
	TodoList,

	Alignment,

	Indent,
	IndentBlock,
	
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageResize,

	MediaEmbed,
	MediaEmbedToolbar,

	BlockQuote,

	Table,
	TableToolbar,
	TableCellProperties,
	TableProperties,

	HorizontalLine,
	PageBreak,

	FontBackgroundColor,
	FontColor,
	FontSize,
	FontFamily,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'removeFormat',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'link',
			'|',
			'codeBlock',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'mediaEmbed',
			'blockQuote',
			'insertTable',
			'horizontalLine',
			'pageBreak',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
