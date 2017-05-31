<?php
/**
 * Основные параметры WordPress.
 *
 * Этот файл содержит следующие параметры: настройки MySQL, префикс таблиц,
 * секретные ключи и ABSPATH. Дополнительную информацию можно найти на странице
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Кодекса. Настройки MySQL можно узнать у хостинг-провайдера.
 *
 * Этот файл используется скриптом для создания wp-config.php в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать этот файл
 * с именем "wp-config.php" и заполнить значения вручную.
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'admin_clever');

/** Имя пользователя MySQL */
define('DB_USER', 'admin_clever');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'P3q9Z6a9');

/** Имя сервера MySQL */
define('DB_HOST', '104.131.98.243');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'avc6zx^9VEl6[A)U)*bi40RZ{E2?m:i`guL&-,xNGA@+7+b?PgA&},Q91R`!-:bN');
define('SECURE_AUTH_KEY',  '`Zba~6-tT hX^f+c<4fh6aFuY|cf33x(&`~>WgtBDca|tnF|;M(EYMFB}Cc83y3y');
define('LOGGED_IN_KEY',    'TK!1f9M]O1GNu1^|H9o(XP1SL_b1fs^UNZ)hIz&|e1TQ(FO,=D0Oi-N/H;.eki|k');
define('NONCE_KEY',        '*$TzY%k]g[%ckzD<#>ncfe*}?_q?w;aMV BlQ7Yh@!mE#YuL24!V1V_5`#D>lPF$');
define('AUTH_SALT',        'GUS]r6m|m4CXF<,g$+0Fk$8Q3e[8&Y48-|@yh=&IQ=pl)|lLn^9zj+mkfw S}#H8');
define('SECURE_AUTH_SALT', 'J7]AL5}DS=!KUQzN(<qjOI|GlH$^CC_$Uy<kIuB:ia}.05t|&/+6-E_fgF|_QUTc');
define('LOGGED_IN_SALT',   'sv3qkZ]35$V{&mg#-.}(RJL5{]<Hl#?-K_Y_<.<GiI/ZYU7.Q!M9R(u^U1y+Z)W&');
define('NONCE_SALT',       'L$r^n7spk.mk*$19eV|D[:b@DhO1e|df`kbEJMcD[-[51q.Vq@i!rw5FgN`%*Ata');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'clever_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 */
define('WP_DEBUG', false);

define( 'WP_AUTO_UPDATE_CORE', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
