<?php

/**
 * デバック用関数
 */
function d() {
  echo '<pre style="position: relative; z-index: 10000; background:#fff; color:#4f5b93; border:2px solid #7a86b8; margin:5px; padding:5px; font-size:14px; line-height:1.8;">';
  // 関数に渡された引数を一つずつvar_dumpする
  foreach(func_get_args() as $item) {
      var_dump($item);
  }
  echo '</pre>';
}

/**
 * パタメータを除いたルートパスを取得
 */
function get_current_uri() {
  $uri = $_SERVER['REQUEST_URI'];
  if(strstr($uri, '?')) {
    $uri = strtok($uri, '?');
  }
  return $uri;
}

/**
 * 使用されているテンプレートを取得
 */
function getCurrentTemplate() {
  $template = get_page_template();
  $template = pathinfo($template, PATHINFO_FILENAME);
  return $template;
}

/**
 * 現在のディレクトリ（第一階層を取得）
 */
function getCurrentPath($uri) {
  $path = explode('/', trim($uri, '/'));
  return $path[0];
}

/**
 * 末尾のディレクトリを取得
 */
function getEndPath() {
  $uri = rtrim($_SERVER['REQUEST_URI'], '/');
  $uri = substr($uri, strrpos($uri, '/') + 1);
  if(strstr($uri, '?')) {
    $uri = strtok($uri, '?');
  }
  return $uri;
}

function get_article_file() {
	$currentUri = get_current_uri();
	$filePath = substr($currentUri, 0, strlen($currentUri) -1);
	$articleFile = get_template_directory() . 'include' . $filePath . '.php';
	if(file_exists($articleFile)) {
		include $articleFile;
		return;
	}
	$indexArticleFile = get_template_directory() . 'include' . $currentUri . 'index.php';
	if(file_exists($indexArticleFile)) {
		include $indexArticleFile;
		return;
	}
}
