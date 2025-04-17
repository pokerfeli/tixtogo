/*
  # Insert MoMA attraction

  1. Changes
    - Insert The MoMA attraction record with specified details
    - Use numeric 0 for child column instead of boolean false
*/

-- Insert MoMA attraction data
INSERT INTO attractions (
  id,
  city,
  name,
  price,
  description,
  img_url,
  category,
  child
) VALUES (
  '0fc147a8-804a-49bc-bc4b-f4dcc24d9b68',
  'new york',
  'The MoMA',
  17.50,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/10MomaNY.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzEwTW9tYU5ZLmpwZyIsImlhdCI6MTc0NDMwMjU1NCwiZXhwIjoyNzg0OTkwNTU0fQ.smfQFaZFK3j1qu5dIK2zcmNnxSGWMans1oAeZV3EquU',
  'museums',
  0
);