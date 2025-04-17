/*
  # Create attractions table

  1. New Tables
    - `attractions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `reviews` (integer, default 0)
      - `price` (decimal, required)
      - `created_at` (timestamp with timezone)
      - `updated_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `attractions` table
    - Add policies for:
      - Public read access
      - Authenticated users can create/update attractions
*/

-- Create attractions table
CREATE TABLE IF NOT EXISTS attractions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  reviews integer DEFAULT 0,
  price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE attractions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access"
  ON attractions
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to create attractions"
  ON attractions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update attractions"
  ON attractions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_attractions_updated_at
  BEFORE UPDATE ON attractions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();