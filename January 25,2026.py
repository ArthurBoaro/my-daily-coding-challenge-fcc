def scale_image(size, scale):
    
    [height, width] = size.split("x")
    height = int(int(height) * scale)
    width = int(int(width) * scale)

    return f"{height}x{width}"