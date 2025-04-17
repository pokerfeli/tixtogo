/*
  # Add new fields to attractions table

  1. Changes
    - Add discount_price column (decimal, nullable)
    - Add exact_location column (text)
    - Add transport_info column (text)
    - Add check constraint to ensure discount_price is less than price
*/

-- Add new columns
ALTER TABLE attractions
ADD COLUMN IF NOT EXISTS discount_price decimal(10,2),
ADD COLUMN IF NOT EXISTS exact_location text,
ADD COLUMN IF NOT EXISTS transport_info text;

-- Add check constraint for discount_price
ALTER TABLE attractions
ADD CONSTRAINT attractions_discount_price_check 
CHECK (discount_price IS NULL OR (discount_price >= 0 AND discount_price < price));