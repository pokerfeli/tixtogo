/*
  # Drop attractions table

  1. Changes
    - Drop the attractions table and all associated objects
    - Remove RLS policies
    - Remove trigger function
*/

-- Drop the table (this will automatically drop associated triggers and policies)
DROP TABLE IF EXISTS attractions;

-- Drop the trigger function
DROP FUNCTION IF EXISTS update_updated_at_column();