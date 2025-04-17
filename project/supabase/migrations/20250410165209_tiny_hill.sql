/*
  # Insert Landmarks attraction

  1. Changes
    - Insert Landmarks attraction record with specified details
*/

-- Insert Landmarks attraction data
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
  '12194045-70bb-4dc5-a05f-614409038743',
  'New York',
  'Landmarks',
  12.00,
  NULL,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/5Landmarks%20(1.5%20hrs)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzVMYW5kbWFya3MgKDEuNSBocnMpIE5ZQy5qcGciLCJpYXQiOjE3NDQzMDE1NjQsImV4cCI6Mjc4NDk4OTU2NH0.sjx28w_TiBkaoLxrsXLBMAyg1mwRsRUL-PAe3Tt-9BE',
  'uniqueExperiences',
  0
);