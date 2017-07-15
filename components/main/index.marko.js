// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {
          const routes = [
                  {
                      path: "/",
                      component: require("../home")
                    },
                  {
                      path: "/top",
                      component: require("../news-list")
                    },
                  {
                      path: "/new",
                      component: require("../add-story")
                    },
                  {
                      path: "/item/:id",
                      component: require("../news")
                    }
                ];

          const render = Router.renderSync({
                  routes: routes,
                  initialRoute: "/"
                });

          render.appendTo(this.getEl("router-container")).getComponent();
        }
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/main/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    markoPathRouter_module = require("marko-path-router"),
    Router = markoPathRouter_module.Router,
    store = require("../../store"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    router_link_template = marko_loadTemplate(require.resolve("marko-path-router/src/components/router-link/index.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"header\"" +
    marko_attr("id", __component.elId("_r0")) +
    "><nav class=\"inner\">");

  router_link_tag({
      path: "/",
      renderBody: function renderBody(out) {
        out.w("<img class=\"logo\" src=\"/logo-48.png\" alt=\"logo\">");
      }
    }, out);

  router_link_tag({
      path: "/top",
      renderBody: function renderBody(out) {
        out.w("Top");
      }
    }, out);

  router_link_tag({
      path: "/new",
      renderBody: function renderBody(out) {
        out.w("New");
      }
    }, out);

  router_link_tag({
      path: "/show",
      renderBody: function renderBody(out) {
        out.w("Show");
      }
    }, out);

  router_link_tag({
      path: "/ask",
      renderBody: function renderBody(out) {
        out.w("Ask");
      }
    }, out);

  router_link_tag({
      path: "/job",
      renderBody: function renderBody(out) {
        out.w("Jobs");
      }
    }, out);

  router_link_tag({
      path: "/item/3",
      renderBody: function renderBody(out) {
        out.w("Item 3");
      }
    }, out);

  out.w("<a class=\"github\" href=\"#\" target=\"_blank\" rel=\"noopener\">Built with Huncwot </a></nav></header><section class=\"section\"" +
    marko_attr("id", __component.elId("_r1")) +
    "><div class=\"container\"><div" +
    marko_attr("id", __component.elId("router-container")) +
    "></div></div></section>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "body {\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\tfont-size: 15px;\n\tbackground-color: #f2f3f5;\n\tmargin: 0;\n\tpadding-top: 55px;\n\tcolor: #34495e;\n\toverflow-y: scroll;\n}\n\na {\n\tcolor: #34495e;\n\ttext-decoration: none;\n}\n\n.header {\n\tbackground-color: #f60;\n\tposition: fixed;\n\tz-index: 999;\n\theight: 55px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n}\n\n.header .inner {\n\tmax-width: 800px;\n\tbox-sizing: border-box;\n\tmargin: 0px auto;\n\tpadding: 15px 5px;\n}\n\n.header a {\n\tcolor: rgba(255,255,255,0.8);\n\tline-height: 24px;\n\ttransition: color 0.15s ease;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-weight: 300;\n\tletter-spacing: 0.075em;\n\tmargin-right: 1.8em;\n}\n\n.header a:hover {\n\tcolor: #fff;\n}\n\n.header a.router-link-active {\n\tcolor: #fff;\n\tfont-weight: 400;\n}\n\n.header a:nth-child(6) {\n\tmargin-right: 0;\n}\n\n.header .github {\n\tcolor: #fff;\n\tfont-size: 0.9em;\n\tmargin: 0;\n\tfloat: right;\n}\n\n.logo {\n\twidth: 24px;\n\tmargin-right: 10px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n.view {\n\tmax-width: 800px;\n\tmargin: 0 auto;\n\tposition: relative;\n}\n\n.fade-enter-active,\n.fade-leave-active {\n\ttransition: all 0.2s ease;\n}\n\n.fade-enter,\n.fade-leave-active {\n\topacity: 0;\n}\n\n@media (max-width: 860px) {\n\t.header .inner {\n\t\tpadding: 15px 30px;\n\t}\n}\n\n@media (max-width: 600px) {\n\t.header .inner {\n\t\tpadding: 15px;\n\t}\n\n\t.header a {\n\t\tmargin-right: 1em;\n\t}\n\n\t.header .github {\n\t\tdisplay: none;\n\t}\n}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko-path-router/src/components/router-link/index.marko"
    ]
  };
