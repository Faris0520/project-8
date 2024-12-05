def lemeshow_sample_size(Z, P, e, N=None):
    """
    Hitung ukuran sampel menggunakan Rumus Lemeshow.
    
    Parameters:
    Z : float - Nilai Z (berdasarkan tingkat kepercayaan)
    P : float - Proporsi populasi yang diharapkan (default 0.5 jika tidak diketahui)
    e : float - Margin of error
    N : int (optional) - Ukuran populasi (jika diketahui)
    
    Returns:
    n : float - Ukuran sampel
    """
    # Hitung ukuran sampel awal
    n = (Z**2 * P * (1 - P)) / (e**2)
    
    # Jika populasi diketahui, lakukan penyesuaian
    if N:
        n_adjusted = n / (1 + ((n - 1) / N))
        return n_adjusted
    
    return n


# Parameter
Z = 1.96  # Tingkat kepercayaan 95%
P = 0.5   # Proporsi populasi (jika tidak diketahui, gunakan 0.5)
e = 0.05  # Margin of error (5%)

# Kasus 1: Populasi besar (tidak diketahui)
n_besar = lemeshow_sample_size(Z, P, e)
print(f"Ukuran sampel untuk populasi besar: {round(n_besar)}")

# Kasus 2: Populasi kecil (diketahui)
N = 1000  # Ukuran populasi diketahui
n_kecil = lemeshow_sample_size(Z, P, e, N)
print(f"Ukuran sampel untuk populasi kecil (N = {N}): {round(n_kecil)}")
