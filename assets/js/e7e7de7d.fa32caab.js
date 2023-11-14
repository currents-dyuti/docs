"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6756],{3331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(5893),o=n(1151);const r={sidebar_position:3,slug:"/catalog-management"},i="Catalog Management",s={id:"platform/catalog-management",title:"Catalog Management",description:"The product listings on marketplaces (e.g Amazon) can be messy, incorrect or incomplete.",source:"@site/help/platform/catalog-management.md",sourceDirName:"platform",slug:"/catalog-management",permalink:"/docs/help/catalog-management",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/catalog-management"},sidebar:"helpSidebar",previous:{title:"Advanced Query Operators",permalink:"/docs/help/advanced-query-operators"},next:{title:"User Roles - Members, Admins, Owners",permalink:"/docs/help/user-roles"}},l={},d=[{value:"How to edit the catalog data?",id:"how-to-edit-the-catalog-data",level:4},{value:"<em>1. Select the Entity</em>",id:"1-select-the-entity",level:5},{value:"<em>2. Download CSV</em>",id:"2-download-csv",level:5},{value:"<em>3. Edit Details</em>",id:"3-edit-details",level:5},{value:"<em>4.\xa0Delete Unedited Rows</em>",id:"4delete-unedited-rows",level:5},{value:"<em>5. Upload the Edited CSV</em>",id:"5-upload-the-edited-csv",level:5},{value:"What properties of an entity should NOT be edited?",id:"what-properties-of-an-entity-should-not-be-edited",level:4},{value:"What properties of an entity can be edited?",id:"what-properties-of-an-entity-can-be-edited",level:4},{value:"How to change the &quot;Name&quot; of an entity?",id:"how-to-change-the-name-of-an-entity",level:4},{value:"How to change the &quot;Brand&quot; of an entity?",id:"how-to-change-the-brand-of-an-entity",level:4},{value:"How to change the &quot;Category&quot; of an entity?",id:"how-to-change-the-category-of-an-entity",level:4},{value:"What are &quot;Search Terms&quot;? How to add searchable terms to an entity?",id:"what-are-search-terms-how-to-add-searchable-terms-to-an-entity",level:4},{value:"What are &quot;Cross Marketplace Ids&quot;? How to add these to an entity?",id:"what-are-cross-marketplace-ids-how-to-add-these-to-an-entity",level:4},{value:"How to remove an entity from the catalog?",id:"how-to-remove-an-entity-from-the-catalog",level:4},{value:"Can I upload another CSV while older tasks are in progress?",id:"can-i-upload-another-csv-while-older-tasks-are-in-progress",level:4}];function h(e){const t={em:"em",h1:"h1",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"catalog-management",children:"Catalog Management"}),"\n",(0,a.jsx)(t.p,{children:"The product listings on marketplaces (e.g Amazon) can be messy, incorrect or incomplete."}),"\n",(0,a.jsx)(t.p,{children:'Since our crawlers rely heavily on the meta-data collected from the marketplace, the catalog here might reflect the inconsistencies of the marketplace. For example, a keyboard SKU could get listed under the "Mouse" category on Amazon.'}),"\n",(0,a.jsx)(t.p,{children:'The "Catalog Management" feature enables you to correct such errors by enabling you to edit various properties of each entity.'}),"\n",(0,a.jsx)(t.p,{children:"Answers to some commonly asked questions are below -"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-edit-the-catalog-data",children:"How to edit the catalog data?"}),"\n",(0,a.jsx)(t.h5,{id:"1-select-the-entity",children:(0,a.jsx)(t.em,{children:"1. Select the Entity"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This could be an individual product or a collection of products e.g Brand, Variant Aggregate, a custom Source, the entire Category or Super-Category."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"2-download-csv",children:(0,a.jsx)(t.em,{children:"2. Download CSV"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'Click on the "Download CSV" button to download the details of the selected entity.'}),"\n",(0,a.jsx)(t.li,{children:"If the selected entity is an individual product, the CSV will have just 1 row with details of that product."}),"\n",(0,a.jsx)(t.li,{children:"If the selected entity is a Brand or Category, the CSV will have details of all products in that collection, with each row representing a single product."}),"\n",(0,a.jsx)(t.li,{children:"The download could take a few seconds."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"3-edit-details",children:(0,a.jsx)(t.em,{children:"3. Edit Details"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Edit the details of individual products. The list of editable and non-editable properties are described below."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"4delete-unedited-rows",children:(0,a.jsx)(t.em,{children:"4.\xa0Delete Unedited Rows"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Remove any rows that you did not edit."}),"\n"]}),"\n",(0,a.jsx)(t.h5,{id:"5-upload-the-edited-csv",children:(0,a.jsx)(t.em,{children:"5. Upload the Edited CSV"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Once you upload the edited CSV, a task will be created to check the differences and make the necessary changes. This can take a few minutes to hours, depending on the number of changes requested."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-properties-of-an-entity-should-not-be-edited",children:"What properties of an entity should NOT be edited?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Entity Id"}),"\n",(0,a.jsx)(t.li,{children:"Source Id"}),"\n",(0,a.jsx)(t.li,{children:"URL"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"These properties have been provided only for the purposes of identifying the product."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-properties-of-an-entity-can-be-edited",children:"What properties of an entity can be edited?"}),"\n",(0,a.jsx)(t.p,{children:"The following properties can be edited."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Name"}),"\n",(0,a.jsx)(t.li,{children:"Brand"}),"\n",(0,a.jsx)(t.li,{children:"Categories"}),"\n",(0,a.jsx)(t.li,{children:"Search Terms"}),"\n",(0,a.jsx)(t.li,{children:"Cross Marketplace Ids"}),"\n",(0,a.jsx)(t.li,{children:"Visibility"}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-name-of-an-entity",children:'How to change the "Name" of an entity?'}),"\n",(0,a.jsx)(t.p,{children:"The default product name is determined from the marketplace. You can change the name by overriding the \u201cName\u201d column in the CSV."}),"\n",(0,a.jsx)(t.p,{children:"Once updated, the new name will be used for search and visualisations (tables, graphs, etc)."}),"\n",(0,a.jsx)(t.p,{children:'Tip - If you just want to add a searchable nick name, add it to "Search Terms" instead of changing the name.'}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-brand-of-an-entity",children:'How to change the "Brand" of an entity?'}),"\n",(0,a.jsx)(t.p,{children:"The default brand is determined from the marketplace. You can change the brand by overriding the \u201cBrand\u201d column in the CSV."}),"\n",(0,a.jsx)(t.p,{children:"Ensure that you use the exact name of the brand as used in this platform."}),"\n",(0,a.jsx)(t.p,{children:"For example, if the entity name is \u201cLogitech (Brand) - All Marketplaces\u201d, the Brand is \u201cLogitech\u201d."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-change-the-category-of-an-entity",children:'How to change the "Category" of an entity?'}),"\n",(0,a.jsx)(t.p,{children:'The default category for an entity is determined from the marketplace. You can change the category by overriding the "Categories" column in the CSV.'}),"\n",(0,a.jsx)(t.p,{children:"Ensure that you use the exact name of the categories as used in this platform. To indicate a hierarchy in category, use comma separated values.\xa0"}),"\n",(0,a.jsxs)(t.p,{children:["For example, a SKU has the category hierarchy -\xa0\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Keyboard."})]}),"\n",(0,a.jsxs)(t.p,{children:["To change the category from\xa0\xa0",(0,a.jsx)(t.em,{children:"Keyboard"}),"\xa0to\xa0",(0,a.jsx)(t.em,{children:"Mouse"}),", change\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Keyboard"}),"\xa0to\xa0",(0,a.jsx)(t.em,{children:"All, Input Devices, Mouse"}),".\xa0"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-are-search-terms-how-to-add-searchable-terms-to-an-entity",children:'What are "Search Terms"? How to add searchable terms to an entity?'}),"\n",(0,a.jsx)(t.p,{children:"Search Terms are additional terms that can be added as meta-data for an entity. These terms can then be used for searching for that entity."}),"\n",(0,a.jsx)(t.p,{children:"For example, you can add an internal model number\xa0as a search term."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"what-are-cross-marketplace-ids-how-to-add-these-to-an-entity",children:'What are "Cross Marketplace Ids"? How to add these to an entity?'}),"\n",(0,a.jsx)(t.p,{children:'The Cross Marketplace Id is used to reconcile the same products across different marketplaces. If the "Cross Marketplace Ids" of a few products are exactly the same, they are treated as the same products from different marketplaces.'}),"\n",(0,a.jsx)(t.p,{children:'Note - the "Cross Marketplace Ids" can only contain alphabets, numbers, dashes ("-") or underscores ("_"). It should NOT include spaces.'}),"\n",(0,a.jsx)(t.p,{children:'You can change this reconciliation by editing the "Cross Marketplace Ids" column in the CSV.'}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"how-to-remove-an-entity-from-the-catalog",children:"How to remove an entity from the catalog?"}),"\n",(0,a.jsx)(t.p,{children:"The default visibility of each entity is True. If the visibility is set to False, the entity will be removed from the catalog and it will no longer appear in search,\xa0reports, visualizations or be counted as a part of any group."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h4,{id:"can-i-upload-another-csv-while-older-tasks-are-in-progress",children:"Can I upload another CSV while older tasks are in progress?"}),"\n",(0,a.jsx)(t.p,{children:"Yes, you can. If there are conflicing changes, then the latest edits will be honoured."}),"\n",(0,a.jsx)(t.hr,{})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(7294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);