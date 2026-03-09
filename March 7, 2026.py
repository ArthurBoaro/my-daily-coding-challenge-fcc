def get_element_size(window_size, element_vw, element_vh):

    width, height = map(int, window_size.split(" x "))
    vw = int(element_vw[:-2])
    vh = int(element_vh[:-2])

    result_w = width * vw // 100
    result_h = height * vh // 100

    return f"{result_w} x {result_h}"