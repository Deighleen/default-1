// import CMS from 'netlify-cms-app';
// import PagePreview from './preview-templates/page-preview';
// import PostPreview from './preview-templates/post-preview';

// CMS.registerPreviewTemplate('pages', PagePreview);
// CMS.registerPreviewTemplate('posts', PostPreview);


import CMS from 'netlify-cms-app'
// import AboutPagePreview from './preview-templates/AboutPagePreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'
// import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'


CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)