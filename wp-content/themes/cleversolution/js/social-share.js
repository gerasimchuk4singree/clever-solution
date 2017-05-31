Share = {
    /**
     * Показать пользователю дилог шаринга в сооветствии с опциями
     * Метод для использования в inline-js в ссылках
     * При блокировке всплывающего окна подставит нужный адрес и ползволит браузеру перейти по нему
     *
     *
     *   // Пример кнопок с минимальной настройкой
     *    <p>Поделиться:
     *        <button class="social_share" data-type="vk">ВКонтакте</button>
     *        <button class="social_share" data-type="fb">Facebook</button>
     *        <button class="social_share" data-type="tw">Twitter</button>
     *        <button class="social_share" data-type="gp">Google+</button>
     *        <button class="social_share" data-type="pp">Pinterest</button>
     *        <button class="social_share" data-type="li">LinkedIn</button>
     *        <button class="social_share" data-type="lj">LiveJournal</button>
     *        <button class="social_share" data-type="ok">Одноклассники</button>
     *        <button class="social_share" data-type="mr">Mail.Ru</button>
     *        <button class="social_share" data-type="tr">Tumblr</button>
     *
     *        <button onclick="Share.pinterest()">Pinterest</button>
     *    </p>
     *
     *
     *   // Пример кнопки с полным списком парамметров
     *   <button class="social_share"
     *          data-type="{{тип соцсети}}"
     *          data-url="{{какую ссылку шарим}}"
     *          data-count_url="{{для какой ссылки крутим счётчик}}"
     *          data-title="{{заголовок шаринга}}"
     *          data-image="{{картинка шаринга}}"
     *          data-text="{{текст шаринга}}"
     *   >
     *      Facebook
     *   </button>
     *
     *
     *   // Можно использовать разметку Open Graph в head страницы
     *    <meta property="og:url"           content="https://example.ru" />
     *    <meta property="og:type"          content="website" />
     *    <meta property="og:title"         content="тайтл" />
     *    <meta property="og:description"   content="описание" />
     *    <meta property="og:image"         content="https://example.ru/123/img.png" />
     *
     *
     * @example <a href="" onclick="return share.go(this)">like+</a>
     *
     * @param _element - элемент DOM, для которого
     * @param _options - опции, все необязательны
     */
    go: function(_element, _options) {
        var
            self = Share,
            options = $.extend(
                {
                    type:       'vk',                  // тип соцсети
                    url:        location.href,         // какую ссылку шарим
                    count_url:  location.href,         // для какой ссылки крутим счётчик
                    title:      param('title'),        // заголовок шаринга  // document.title
                    image:      param('image'),        // картинка шаринга
                    text:       param('description')   // текст шаринга
                },
                $(_element).data(), // Если параметры заданы в data, то читаем их
                _options            // Параметры из вызова метода имеют наивысший приоритет
            );

        if (self.popup(link = self[options.type](options)) === null) {
            // Если не удалось открыть попап
            if ( $(_element).is('a') ) {
                // Если это <a>, то подставляем адрес и просим браузер продолжить переход по ссылке
                $(_element).prop('href', link);
                return true;
            }
            else {
                // Если это не <a>, то пытаемся перейти по адресу
                location.href = link;
                return false;
            }
        }
        else {
            // Попап успешно открыт, просим браузер не продолжать обработку
            return false;
        }

        function param(name) {
            return $('meta[property=og\\:' + name + ']').attr('content');
        }
    },

    // ВКонтакте
    vk: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   ''
        }, _options);

        return 'http://vkontakte.ru/share.php?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&image='       + encodeURIComponent(options.image)
            + '&noparse=true';
    },

    // Одноклассники
    ok: function(_options) {
        var options = $.extend({
            url:    location.href,
            text:   ''
        }, _options);

        return 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1'
            + '&st.comments=' + encodeURIComponent(options.text)
            + '&st._surl='    + encodeURIComponent(options.url);
    },

    // Facebook
    fb: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   ''
        }, _options);

        return 'http://www.facebook.com/sharer.php?s=100'
            + '&p[title]='     + encodeURIComponent(options.title)
            + '&p[summary]='   + encodeURIComponent(options.text)
            + '&p[url]='       + encodeURIComponent(options.url);
        // + '&p[images][0]=' + encodeURIComponent(options.image);
    },

    // Живой Журнал
    lj: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            text:   ''
        }, _options);

        return 'http://livejournal.com/update.bml?'
            + 'subject='        + encodeURIComponent(options.title)
            + '&event='         + encodeURIComponent(options.text + '<br/><a href="' + options.url + '">' + options.title + '</a>')
            + '&transform=1';
    },

    // Google+
    gp: function (_options) {
        var options = $.extend({
            url: location.href
        }, _options);

        return 'https://plus.google.com/share?url='
            + encodeURIComponent(options.url);
    },

    //Pinterest
    pp: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   ''
        }, _options);

        return 'http://pinterest.com/pin/create/button/?'
            + '&url='           + encodeURIComponent(options.url)
            + '&title='         + encodeURIComponent(options.title)
            + '&media='         + encodeURIComponent(options.image)
            + '&description='   + encodeURIComponent(options.text);
    },

    //LinkedIn
    li: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            text:   ''
        }, _options);

        return 'http://www.linkedin.com/shareArticle?mini=true'
            + '&url='       + encodeURIComponent(options.url)
            + '&title='     + encodeURIComponent(options.title)
            + '&summary='   + encodeURIComponent(options.text);
    },

    // Твиттер
    tw: function(_options) {
        var options = $.extend({
            url:        location.href,
            count_url:  location.href,
            title:      document.title
        }, _options);

        return 'http://twitter.com/share?'
            + 'text='      + encodeURIComponent(options.title)
            + '&url='      + encodeURIComponent(options.url)
            + '&counturl=' + encodeURIComponent(options.count_url);
    },

    // Mail.Ru
    mr: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   ''
        }, _options);

        return 'http://connect.mail.ru/share?'
            + 'url='          + encodeURIComponent(options.url)
            + '&title='       + encodeURIComponent(options.title)
            + '&description=' + encodeURIComponent(options.text)
            + '&imageurl='    + encodeURIComponent(options.image);
    },

    // Tumblr
    tr: function(_options) {
        var options = $.extend({
            url:    location.href,
            title:  document.title,
            image:  '',
            text:   ''
        }, _options);

        return 'http://tumblr.com/widgets/share/tool?'
            + 'content='       + encodeURIComponent(options.url)
            + '&title='        + encodeURIComponent(options.title)
            + '&caption='      + encodeURIComponent(options.text)
            + '&canonicalUrl=' + encodeURIComponent(options.url);
    },

    // Открыть окно шаринга
    popup: function(url) {
        return window.open(url,'','menubar=no,toolbar=0,status=0,resizable=yes,scrollbars=yes,width=626,height=436');
    },

    //Pinterest c возможностью выбора картинки для шаринга
    pinterest: function() {

        var elem = document.createElement('script');
        elem.setAttribute('type', 'text/javascript');
        elem.setAttribute('charset', 'UTF-8');
        elem.setAttribute('src', 'https://assets.pinterest.com/js/pinmarklet.js');
        document.body.appendChild(elem);

    }
};


// Все элементы класса .social_share считаем кнопками шаринга
$(document).on('click', '.social_share', function(){
    Share.go(this);
});