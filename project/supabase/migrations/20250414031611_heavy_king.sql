/*
  # Add product_details table

  1. New Tables
    - `product_details`
      - `id` (uuid, primary key)
      - `attraction_id` (uuid, foreign key to attractions)
      - `long_description` (text)
      - `operating_hours` (text)
      - `entrance_info` (text)
      - `official_website` (text)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `product_details` table
    - Add policies for public read access
*/

-- Create product_details table
CREATE TABLE IF NOT EXISTS product_details (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attraction_id uuid NOT NULL REFERENCES attractions(id) ON DELETE CASCADE,
  long_description text,
  operating_hours text,
  entrance_info text,
  official_website text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (attraction_id)
);

-- Enable Row Level Security
ALTER TABLE product_details ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON product_details
  FOR SELECT
  TO public
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_product_details_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_product_details_updated_at
  BEFORE UPDATE ON product_details
  FOR EACH ROW
  EXECUTE FUNCTION update_product_details_updated_at();