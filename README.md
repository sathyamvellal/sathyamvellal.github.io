11ty Website Template
======================

- Source lives in `source` dir.
- Output compiled to `_site` dir.
- Uses Md + NJK. Can be configured if necessary.
- Copies files in `source/_static` to root of output `_site` dir.
    - This means `source/_static/css/main.css` is compiled to `_site/css/main.css`. 
    - This is done to avoid clutter of static directories and files in the root source dir.
- Layouts are placed in `_layouts`
- Sass format styling code lives in `sass`
- `gulp css` to build sass code
- `eleventy` to build website
