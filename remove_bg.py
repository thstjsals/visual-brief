from PIL import Image
from rembg import remove
import glob
import os

files = glob.glob("public/stickers/*_obj_gen.png") + ["public/stickers/character.png", "public/stickers/character2.png"]
for filepath in files:
    img = Image.open(filepath)
    result = remove(img)
    base, ext = os.path.splitext(filepath)
    out_path = base + "_seg" + ext
    result.save(out_path)
    print(f"Done: {os.path.basename(out_path)}")
