import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    install('Pillow')
    from PIL import Image

import os

for f in ['3.png', '4.png', '5.png']:
    try:
        img = Image.open(f)
        out = 'public/' + f.replace('.png', '.webp')
        img.save(out, 'WEBP', quality=80)
        print(f"Saved {out}")
    except Exception as e:
        print(f"Error {f}: {e}")
