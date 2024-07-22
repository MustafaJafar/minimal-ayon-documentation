/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "AYON Houdini Docs",
    tagline: 
        "Documentation for official AYON Houdini addon.",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "ynput", // Usually your GitHub org/user name.
    projectName: "ayon-houdini", // Usually your repo name.
    stylesheets: [
        "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
    ],
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/ynput/ayon-houdini/tree/develop/documentation",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            items: [
                {
                    type: "custom-logo",
                    position: "left",
                    logo: "/img/AYON_docs_black.svg",
                    logoInverted: "/img/AYON_docs_white.svg",
                    to: "/",
                    logoStyle: {
                        height: "2.5rem",
                        top: -2,
                    },
                },
                {
                    to: "docs/addon_houdini_artist",
                    label: "User Docs",
                    position: "left",
                },
                {
                    to: "docs/addon_houdini_admin",
                    label: "Admin Docs",
                    position: "left",
                },
                // {
                //     to: "docs/dev_introduction",
                //     label: "Dev Docs",
                //     position: "left",
                // },
                {
                    type: "search",
                    position: "right",
                },
            ],
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        algolia: {
            // The application ID provided by Algolia
            appId: "RLOQGA5MLU",

            // Public API key: it is safe to commit it
            apiKey: "98e725168db71b204e80f843f3e277e0",

            indexName: "ayon-ynput",
        },
    }),
    plugins: [
        [
            "ideal-image",
            /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
            ({
                quality: 70,
                max: 1030,
                min: 640,
                steps: 2,
                // Use false to debug, but it incurs huge perf costs
                disableInDev: true,
            }),
        ],
        "docusaurus-plugin-sass",       
        [
            require.resolve("docusaurus-plugin-remote-content"),
            {
                // https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/addon_houdini_artist.md
                name: "markdown-content", 
                id: "addon_houdini_artist",
                outDir: "docs",
                sourceBaseUrl:
                    "https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/",
                documents: [
                    "addon_houdini_artist.md",
                    "addon_houdini_admin.md"],
                // noRuntimeDownloads: true,
            },
        ],
        [
            require.resolve("docusaurus-plugin-remote-content"),
            {
                // https://api.github.com/repos/ynput/ayon-documentation/contents/website/docs/assets/houdini/artist
                name: "images-content",
                id: "get_houdini_artist_images",
                outDir: "docs/assets/houdini/artist",
                sourceBaseUrl:
                    "https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/assets/houdini/artist",
                documents: [
                    "Inventory_manage_products.png",
                    "extra_attributes_subsets.png",
                    "faq_product_name.png",
                    "faq_publish_existing_files.png",
                    "houdini_farm_cache_creator.png",
                    "houdini_farm_cache_loader.png",
                    "houdini_frame_per_task.png",
                    "houdini_render_creator.png",
                    "houdini_render_publish.png",
                    "houdini_render_publish_no_split.png",
                    "houdini_render_publish_split.png",
                    "houdini_render_publish_split_setting.png",
                    "houdini_usd_stage.png",
                    "loader_tool_demo.mp4",
                    "menu_ayon.png",
                    "menu_create_creator_ui.png",
                    "menu_load_load_library.png",
                    "publish_alembic_camera.mp4",
                    "publish_composite_image_sequences.mp4",
                    "publish_filmbox_fbx.mp4",
                    "publish_hda.mp4",
                    "publish_karma_render.mp4",
                    "publish_mantra_render.mp4",
                    "publish_pointcache_alembic.mp4",
                    "publish_pointcache_bgeo.png",
                    "publish_review.mp4",
                    "publish_vdb_cache.mp4",
                    "publisher_ui_arnold_rop.png",
                    "publisher_ui_publish_button.png",
                    "publisher_ui_vray_rop.png",
                    "push_to_library_project.png",
                    "self_publish_button.png",
                    "staticmesh-name-default.png",
                    "staticmesh-name-unreal.png",
                    "tab_menu.png",
                    "tab_menu_alembic_camera.png",
                    "tab_menu_arnold_ass.png",
                    "tab_menu_arnold_rop.png",
                    "tab_menu_composite_image_sequences.png",
                    "tab_menu_filmbox_fbx.png",
                    "tab_menu_karma_rop.png",
                    "tab_menu_mantra_rop.png",
                    "tab_menu_pointcache_alembic.png",
                    "tab_menu_pointcache_bgeo.png",
                    "tab_menu_redshift_proxy_rop.png",
                    "tab_menu_redshift_rop.png",
                    "tab_menu_review_rop.png",
                    "tab_menu_usd.png",
                    "tab_menu_usd_render.png",
                    "tab_menu_vdb_geometry_rop.png",
                    "tab_menu_vray_rop.png",
                ],
                requestConfig: { responseType: "arraybuffer" },
                // noRuntimeDownloads: true,
            },
        ],
        [
            require.resolve("docusaurus-plugin-remote-content"),
            {
                // https://api.github.com/repos/ynput/ayon-documentation/contents/website/docs/assets/houdini/admin
                name: "images-content",
                id: "get_houdini_admin_images",
                outDir: "docs/assets/houdini/admin",
                sourceBaseUrl:
                    "https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/assets/houdini/admin",
                documents: [
                    'faq-deadline-config.png',
                    'faq-houdini-ayon-update-path.png',
                    'general_settings_self_publish_button.png',
                    'houdini-admin_shelvesmanager.png',
                    'houdini-color-management.png',
                    'houdini_publish_plugins_collectors_frame_range.png',
                    'houdini_shelves_manager_example.png',
                    'houdini_shelves_manager_mode_1.png',
                    'houdini_shelves_manager_mode_2.png',
                    'houdini_shelves_manager_settings.png',
                    'update-houdini-vars-context-change.png'
                  ],
                requestConfig: { responseType: "arraybuffer" },
                // noRuntimeDownloads: true,
            },
        ],
        [
            require.resolve("docusaurus-plugin-remote-content"),
            {
                // https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/assets/json/Ayon_addons_version.json
                name: "images-content",
                id: "get_houdini_badge",
                outDir: "docs/assets/json/",
                sourceBaseUrl:
                    "https://raw.githubusercontent.com/ynput/ayon-documentation/main/website/docs/assets/json/",
                documents: [
                    "Ayon_addons_version.json"
                ],
                requestConfig: { responseType: "arraybuffer" },
                // noRuntimeDownloads: true,
            },
        ],
    ],
};

module.exports = config;
