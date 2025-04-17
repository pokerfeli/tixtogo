/*
  # Add whats_included and whats_not_included tables

  1. New Tables
    - `whats_included`
      - `id` (uuid, primary key)
      - `attraction_id` (uuid, foreign key to attractions)
      - `item` (text, required)
      - `description` (text, nullable)
      - `order_index` (integer, default 0)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

    - `whats_not_included`
      - `id` (uuid, primary key)
      - `attraction_id` (uuid, foreign key to attractions)
      - `item` (text, required)
      - `description` (text, nullable)
      - `order_index` (integer, default 0)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

-- Create whats_included table
CREATE TABLE IF NOT EXISTS whats_included (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attraction_id uuid NOT NULL REFERENCES attractions(id) ON DELETE CASCADE,
  item text NOT NULL,
  description text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS whats_included_attraction_order_idx ON whats_included (attraction_id, order_index);

-- Enable RLS on whats_included
ALTER TABLE whats_included ENABLE ROW LEVEL SECURITY;

-- Create policies for whats_included
CREATE POLICY "Allow public read access for whats_included"
  ON whats_included
  FOR SELECT
  TO public
  USING (true);

-- Create whats_not_included table
CREATE TABLE IF NOT EXISTS whats_not_included (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attraction_id uuid NOT NULL REFERENCES attractions(id) ON DELETE CASCADE,
  item text NOT NULL,
  description text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS whats_not_included_attraction_order_idx ON whats_not_included (attraction_id, order_index);

-- Enable RLS on whats_not_included
ALTER TABLE whats_not_included ENABLE ROW LEVEL SECURITY;

-- Create policies for whats_not_included
CREATE POLICY "Allow public read access for whats_not_included"
  ON whats_not_included
  FOR SELECT
  TO public
  USING (true);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_whats_included_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for whats_included
CREATE TRIGGER update_whats_included_updated_at
  BEFORE UPDATE ON whats_included
  FOR EACH ROW
  EXECUTE FUNCTION update_whats_included_updated_at();

-- Create updated_at trigger function for whats_not_included
CREATE OR REPLACE FUNCTION update_whats_not_included_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for whats_not_included
CREATE TRIGGER update_whats_not_included_updated_at
  BEFORE UPDATE ON whats_not_included
  FOR EACH ROW
  EXECUTE FUNCTION update_whats_not_included_updated_at();