/**
 * KSS Bootstrap JavaScript
 */
(function($) {
  $(function(){
    // Ensure code blocks are highlighted properly...
    $('pre>code').addClass('prettyprint');
    prettyPrint();

    // Move the child menu into its parent.
    var $menu = $('.kss-menu');
    var $menuItem = $menu.find('.kss-menu-item');
    var ref = $menu.data('kss-ref');
    $('.kss-menu-child').show().appendTo($menuItem.eq(ref));
  });
}(jQuery));
