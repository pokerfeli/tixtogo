export type Database = {
  public: {
    Tables: {
      attractions: {
        Row: {
          id: string;
          city: string;
          name: string;
          price: number;
          description: string | null;
          img_url: string | null;
          category: string | null;
          child: boolean;
          created_at: string;
          updated_at: string;
          discount_price: number | null;
          exact_location: string | null;
          transport_info: string | null;
        };
        Insert: {
          id?: string;
          city: string;
          name: string;
          price: number;
          description?: string | null;
          img_url?: string | null;
          category?: string | null;
          child?: boolean;
          created_at?: string;
          updated_at?: string;
          discount_price?: number | null;
          exact_location?: string | null;
          transport_info?: string | null;
        };
        Update: {
          id?: string;
          city?: string;
          name?: string;
          price?: number;
          description?: string | null;
          img_url?: string | null;
          category?: string | null;
          child?: boolean;
          created_at?: string;
          updated_at?: string;
          discount_price?: number | null;
          exact_location?: string | null;
          transport_info?: string | null;
        };
      };
      product_details: {
        Row: {
          id: string;
          attraction_id: string;
          long_description: string | null;
          operating_hours: string | null;
          entrance_info: string | null;
          official_website: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          attraction_id: string;
          long_description?: string | null;
          operating_hours?: string | null;
          entrance_info?: string | null;
          official_website?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          attraction_id?: string;
          long_description?: string | null;
          operating_hours?: string | null;
          entrance_info?: string | null;
          official_website?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      whats_included: {
        Row: {
          id: string;
          attraction_id: string;
          item: string;
          description: string | null;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          attraction_id: string;
          item: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          attraction_id?: string;
          item?: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      whats_not_included: {
        Row: {
          id: string;
          attraction_id: string;
          item: string;
          description: string | null;
          order_index: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          attraction_id: string;
          item: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          attraction_id?: string;
          item?: string;
          description?: string | null;
          order_index?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
};