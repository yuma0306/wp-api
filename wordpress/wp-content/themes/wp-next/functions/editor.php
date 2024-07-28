<?php

/**
 * エディター画面のカスタマイズ
 * https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#disabling-the-default-block-patterns
 */
function init_editor() {
  remove_theme_support('core-block-patterns');
  remove_post_type_support('page', 'comments');
  remove_post_type_support('page', 'author');
  remove_post_type_support('page', 'editor');
}
add_action('init', 'init_editor');

/**
 * 【ACF】wysiwygエディターの追加
 * https://www.advancedcustomfields.com/resources/customize-the-wysiwyg-toolbars/
 */
function add_original_wysiwyg_editor($toolbars) {
    $toolbars['original_toolbars'] = [];
    $toolbars['original_toolbars'][1] = [
		// 太字
		'bold',
		// 番号なしリスト
		// 'bullist',
		// 番号付きリスト
		// 'numlist',
		// 引用
		// 'blockquote',
		// 左寄せ
		'alignleft',
		// 中央揃え
		'aligncenter',
		// 右寄せ
		'alignright',
		// リンクの挿入と編集
		'link',
		// リンクの削除
		'unlink',
		// テキスト色
		'forecolor',
		// オリジナル
		'marker',
		'removeMarker',
		// フォントサイズ
		// 'fontsizeselect',
	];
	// $toolbars['original_toolbars'][2] = [ ];
  return $toolbars;
}
add_filter('acf/fields/wysiwyg/toolbars', 'add_original_wysiwyg_editor');

/**
 * 【TinyMCE】フォントサイズカスタマイズ
 */
function custom_tiny_mce_font_sizes($init) {
    $init['fontsize_formats'] = '13px 15px 17px 20px 22px';
    return $init;
}
add_filter('tiny_mce_before_init', 'custom_tiny_mce_font_sizes');

/**
 * 【TinyMCE】カレーパレットカスタマイズ
 * https://www.advancedcustomfields.com/resources/customize-the-wysiwyg-toolbars/
 */
function custom_tiny_mce_colors($init) {
	$default_colors = '
		"333333", "TextBlack",
		"FFFFFF", "white"
	';
	$custom_colors = '
		"E1AA3C", "Primary01",
		"FA8501", "Primary02"
	';
	$init['textcolor_map'] = '[' . $default_colors . ',' . $custom_colors . ']';
	// 行数設定
	// $init['textcolor_rows'] = 6;
	return $init;
}
add_filter('tiny_mce_before_init', 'custom_tiny_mce_colors');

/**
 * カスタムTinyMCEボタン用のスクリプトを読み込む
 */
function enqueue_tinymce_marker_script() {
    wp_enqueue_script('tinymce-marker', get_stylesheet_directory_uri() . '/assets/js/tinymce-button.js', array('jquery'), '1.0', true);
}
add_action('admin_enqueue_scripts', 'enqueue_tinymce_marker_script');

/**
 * カスタムTinyMCEボタンを追加する
 */
function add_tinymce_marker_button($buttons) {
    array_push($buttons, 'marker');
    return $buttons;
}
add_filter('mce_buttons', 'add_tinymce_marker_button');

/**
 * カスタムTinyMCEボタンのプラグインを追加する
 */
function add_tinymce_marker_plugin($plugins) {
    $plugins['marker'] = get_stylesheet_directory_uri() . '/assets/js/tinymce-button.js';
    return $plugins;
}
add_filter('mce_external_plugins', 'add_tinymce_marker_plugin');
