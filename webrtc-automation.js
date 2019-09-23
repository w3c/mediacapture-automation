// ReSpec does not handle correctly overloaded constructors https://github.com/w3c/respec/issues/1939 https://github.com/w3c/respec/issues/2513
// So we fix duplicate ids manually for now
function dedupOverload() {
  [...document.querySelectorAll("#idl-def-mediastream-constructor")].forEach((el, i) => el.id += '-' + i);
}
var respecConfig = {
   // specification status (e.g. WD, LCWD, NOTE, etc.). If in doubt use ED.
   specStatus:           "ED",

   // the specification's short name, as in http://www.w3.org/TR/short-name/
   shortName:            "webrtc-automation",
   // if your specification has a subtitle that goes below the main
   // formal title, define it here
   // subtitle   :  "an excellent document",

   // if you wish the publication date to be other than today, set this
   // publishDate:  "2009-08-06",

   // new ability to override the copyright completely
   overrideCopyright:  "<p class='copyright'>Copyright to be defined<\/p>",

   // if the specification's copyright date is a range of years, specify
   // the start date here:
   // copyrightStart: "2005",

   // if there is a previously published draft, uncomment this and set its YYYY-MM-DD
   // prevED: "http://w3c.github.io/mediacapture-main/archives/20170605/getusermedia.html",

   // if there a publicly available Editor's Draft, this is the link
   edDraftURI: "https://youennf.github.io/webrtc-automation/webrtc-automation.html",

   // if this is a LCWD, uncomment and set the end of its review period
   // lcEnd: "2009-08-05",

   // if you want to have extra CSS, append them to this list
   // it is recommended that the respec.css stylesheet be kept
   //extraCSS:             ["http://dev.w3.org/2009/dap/ReSpec.js/css/respec.css"],
   //extraCSS:           ["../../../2009/dap/ReSpec.js/css/respec.css"],

   // editors, add as many as you like
   // only "name" is required
   editors:  [
       { name: "Youenn Fablet", url: "youennf@gmail.com"},
       // company: "Your Company", companyURL: "http://example.com/" },
       // { w3cid: "85118", name: "Daniel C. Burnett", company: "Invited Expert" },
   ],

   // authors, add as many as you like.
   // This is optional, uncomment if you have authors as well as editors.
   // only "name" is required. Same format as editors.

   //authors:  [
   //    { name: "Your Name", url: "http://example.org/",
   //      company: "Your Company", companyURL: "http://example.com/" },
   //],

   // name of the WG
   // wg: ["Web Real-Time Communication Working Group"]          ,

   // URI of the public WG page
   // wgURI:["https://www.w3.org/2011/04/webrtc/"],

   // name (without the @w3.org) of the public mailing to which comments are due
   // wgPublicList: "public-webrtc",

   // URI of the patent status for this WG, for Rec-track documents
   // !!!! IMPORTANT !!!!
   // This is important for Rec-track documents, do not copy a patent URI from a random
   // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
   // Team Contact.
   // wgPatentURI:   ["https://www.w3.org/2004/01/pp-impl/47318/status"],
   otherLinks: [
    {
      key: "Participate",
      data: [
      //  {
      //    value: "Mailing list",
      //    href: "https://lists.w3.org/Archives/Public/public-webrtc/"
      //  },
      //  {
      //    value: "Browse open issues",
      //    href: "https://github.com/w3c/mediacapture-main/issues"
      //  },
      //  {
      //    value: "File a bug",
      //    href: "https://github.com/w3c/mediacapture-main/issues/new"
      //  }
      ]
    }
  ],
   localBiblio: {
     ES6: {
       title:  "ECMAScript 2015",
       href: "http://www.ecma-international.org/ecma-262/6.0/",
       authors: ["Allen Wirfs-Brock"],
       status: "Standard",
       publisher: "Ecma International"
     },
     WebDriver: {
       title:  "WebDriver",
       href: "https://w3c.github.io/webdriver/",
       status: "living",
       publisher: "W3C"
     },
     Permissions: {
       title:  "Permissions",
       href: "https://w3c.github.io/permissions/",
       status: "living",
       publisher: "W3C"
     },
     MediaCaptureMain: {
       title:  "MediaCaptureMain",
       href: "https://w3c.github.io/mediacapture-main/",
       status: "CR",
       publisher: "W3C"
     }
   },
    afterEnd: function markFingerprinting () {
        Array.prototype.forEach.call(
            document.querySelectorAll(".fingerprint"),
            function (el) {
                var img = new Image();
                img.src = "images/fingerprint.png";
                img.alt = "(This is a fingerprinting vector.)";
                img.width = 15;
                img.height = 21;
                el.appendChild(img);
            });
    },
  postProcess: [dedupOverload]
};
