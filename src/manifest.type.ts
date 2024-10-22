interface ManifestV3 {
  manifest_version: 3;
  name: string;
  version: string;
  description?: string;
  icons?: {
    [key: string]: string; // e.g., "16": "icon16.png"
  };
  permissions?: string[];
  action?: {
    default_popup?: string;
    default_icon?: string | { [size: string]: string };
    default_title?: string;
  };
  background?: {
    service_worker: string;
    type?: "module";
  };
  content_scripts?: Array<{
    matches: string[]; // Required
    js?: string[];
    css?: string[];
    run_at?: "document_start" | "document_end" | "document_idle";
    all_frames?: boolean;
  }>;
  web_accessible_resources?: Array<{
    resources: string[]; // Required
    matches: string[]; // Required
  }>;
  host_permissions?: string[];
  optional_host_permissions?: string[];
  commands?: {
    [key: string]: {
      description: string; // Required
      suggested_key?: {
        default?: string;
        mac?: string;
        windows?: string;
        chromeos?: string;
        linux?: string;
      };
    };
  };
  content_security_policy?: {
    extension_pages: string; // Required
    sandbox?: string;
  };
  sandbox?: {
    pages: string[]; // Required
  };
  devtools_page?: string;
  omnibox?: {
    keyword: string; // Required
  };
  chrome_url_overrides?: {
    newtab?: string;
    bookmarks?: string;
    history?: string;
  };
  storage?: {
    managed_schema: string; // Required
  };
  shortcuts?: {
    [command: string]: string; // Required
  };
}

export { type ManifestV3 as Manifest };
