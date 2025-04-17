/*
  # Insert additional attractions data

  1. Data Changes
    - Insert new attraction records for:
      - Landmarks
      - Liberty Midtown
      - Liberty Super Express Downtown
*/

-- Insert attractions data
INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Landmarks',
  12.00,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/5Landmarks%20(1.5%20hrs)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzVMYW5kbWFya3MgKDEuNSBocnMpIE5ZQy5qcGciLCJpYXQiOjE3NDQzMDE1NjQsImV4cCI6Mjc4NDk4OTU2NH0.sjx28w_TiBkaoLxrsXLBMAyg1mwRsRUL-PAe3Tt-9BE',
  'uniqueExperiences'
);

INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Liberty Midtown',
  10.00,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/7Liberty%20Midtown%20(1%20hour)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzdMaWJlcnR5IE1pZHRvd24gKDEgaG91cikgTllDLmpwZyIsImlhdCI6MTc0NDMwMTYxNywiZXhwIjoxMjI0NTc4OTYxN30.2qNdgQvr05esvZbkJm7bl6HMg-c3_vqKm7r5QJR0lrc',
  'uniqueExperiences'
);

INSERT INTO attractions (city, name, price, img_url, category) VALUES
(
  'New York',
  'Liberty Super Express Downtown',
  8.00,
  'https://goudraupaciortdvyqlh.supabase.co/storage/v1/object/sign/attractionimages/8Liberty%20Super%20Express%20Downtown%20(50%20min)%20NYC.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdHRyYWN0aW9uaW1hZ2VzLzhMaWJlcnR5IFN1cGVyIEV4cHJlc3MgRG93bnRvd24gKDUwIG1pbikgTllDLmpwZyIsImlhdCI6MTc0NDMwMTY3OSwiZXhwIjoyNDM4MDkzNjc5fQ.Dtu6GXz7vnq5bF_8jB6uxyefaL4FnAg-4fuU7kMW7Yo',
  'uniqueExperiences'
);