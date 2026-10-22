/**
 * 隐云机场 (yinyuncloud.sbs) 水墨剑气主题 - 移动端导航交互脚本
 */
document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.scroll-masthead');
  if (!header) return;

  var container = header.querySelector('.masthead-wrap');
  var menu = header.querySelector('.scroll-nav-links');
  if (!container || !menu) return;

  var toggle = header.querySelector('.nav-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', '卷轴导航菜单');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';

    var cta = container.querySelector('.btn-cinnabar-top');
    if (cta) {
      var actions = container.querySelector('.header-actions');
      if (!actions) {
        actions = document.createElement('div');
        actions.className = 'header-actions';
        cta.parentNode.insertBefore(actions, cta);
        actions.appendChild(cta);
      }
      actions.appendChild(toggle);
    } else {
      container.appendChild(toggle);
    }
  }

  function openMenu() {
    menu.classList.add('is-open');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 992 && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });
});
