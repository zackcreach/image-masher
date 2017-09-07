# Image Masher!

Image compression tool using imagemin & gulp. Skip Photoshop altogether!

## Mash Instructions

0. Clone repository by running `git clone https://github.com/zackcreach/image-masher.git`
1. CD into new image-masher directory
2. Run `npm install`
3. Run `npm run drag` (this creates an input folder and opens it for drag/drop)
4. Throw your images (jpeg, png, svg, gif) into the input folder
5. run `npm start` to mash!
6. Create CSS selectors and implement in your HTML or JSX (examples below)

Enjoy your new, tiny, ready-to-upload image files!

Once uploaded/relocated, run `gulp clean-output` and/or `gulp clean-input` to remove working files respectively.

* Image quality/compression settings (heavily commented for clarity) can be found in gulp/tasks/compress.js
