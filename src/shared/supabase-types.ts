/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/projects": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          name?: parameters["rowFilter.projects.name"];
          owner_id?: parameters["rowFilter.projects.owner_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["projects"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          name?: parameters["rowFilter.projects.name"];
          owner_id?: parameters["rowFilter.projects.owner_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.projects.id"];
          created_at?: parameters["rowFilter.projects.created_at"];
          name?: parameters["rowFilter.projects.name"];
          owner_id?: parameters["rowFilter.projects.owner_id"];
        };
        body: {
          /** projects */
          projects?: definitions["projects"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/screenshots": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screenshots.id"];
          created_at?: parameters["rowFilter.screenshots.created_at"];
          filename?: parameters["rowFilter.screenshots.filename"];
          updated_at?: parameters["rowFilter.screenshots.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["screenshots"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** screenshots */
          screenshots?: definitions["screenshots"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screenshots.id"];
          created_at?: parameters["rowFilter.screenshots.created_at"];
          filename?: parameters["rowFilter.screenshots.filename"];
          updated_at?: parameters["rowFilter.screenshots.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screenshots.id"];
          created_at?: parameters["rowFilter.screenshots.created_at"];
          filename?: parameters["rowFilter.screenshots.filename"];
          updated_at?: parameters["rowFilter.screenshots.updated_at"];
        };
        body: {
          /** screenshots */
          screenshots?: definitions["screenshots"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  projects: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    name: string;
    /** Format: uuid */
    owner_id: string;
  };
  screenshots: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: text */
    filename: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    updated_at: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description projects */
  "body.projects": definitions["projects"];
  /** Format: uuid */
  "rowFilter.projects.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.projects.created_at": string;
  /** Format: text */
  "rowFilter.projects.name": string;
  /** Format: uuid */
  "rowFilter.projects.owner_id": string;
  /** @description screenshots */
  "body.screenshots": definitions["screenshots"];
  /** Format: uuid */
  "rowFilter.screenshots.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.screenshots.created_at": string;
  /** Format: text */
  "rowFilter.screenshots.filename": string;
  /** Format: timestamp with time zone */
  "rowFilter.screenshots.updated_at": string;
}

export interface operations {}

export interface external {}
