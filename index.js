function tinhToan() {
  const inputNumbers = document.getElementById("inputNumbers").value;
  const numbers = inputNumbers.split(",").map(Number);
  // 1. Tổng các số dương trong mảng
  const tongDuong = numbers.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
  document.getElementById("tongDuong").textContent = tongDuong;
  // 2. Đếm có bao nhiêu số dương trong mảng
  const soDuong = numbers.filter((num) => num > 0).length;
  document.getElementById("soDuong").textContent = soDuong;
  // 3. Tìm số nhỏ nhất trong mảng
  const soNhoNhat = Math.min(...numbers);
  document.getElementById("soNhoNhat").textContent = soNhoNhat;
  // 4. Tìm số dương nhỏ nhất trong mảng
  const soDuongNhoNhat = Math.min(...numbers.filter((num) => num > 0));
  document.getElementById("soDuongNhoNhat").textContent = soDuongNhoNhat;
  // 5. Tìm số chẵn cuối cùng trong mảng
  const soChanCuoiCung = numbers
    .slice()
    .reverse()
    .find((num) => num % 2 === 0);
  document.getElementById("soChanCuoiCung").textContent =
    soChanCuoiCung !== undefined ? soChanCuoiCung : -1;
  // 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
  const viTri1 = parseInt(
    prompt("Nhập vị trí muốn đổi thứ nhất (Từ 1 đến " + numbers.length + "):")
  );
  const viTri2 = parseInt(
    prompt("Nhập vị trí muốn đổi thứ hai (Từ 1 đến " + numbers.length + "):")
  );
  if (
    !isNaN(viTri1) &&
    !isNaN(viTri2) &&
    viTri1 >= 1 &&
    viTri1 <= numbers.length &&
    viTri2 >= 1 &&
    viTri2 <= numbers.length
  ) {
    const tempArray = [...numbers];
    const index1 = viTri1 - 1;
    const index2 = viTri2 - 1;
    const a = tempArray[index1];
    tempArray[index1] = tempArray[index2];
    tempArray[index2] = a;
    document.getElementById("ketQuaDoiCho").textContent = tempArray;
  } else {
    document.getElementById("ketQuaDoiCho").textContent = "Vị trí không hợp lệ";
  }
  // 7. Sắp xếp mảng theo thứ tự tăng dần
  const mangSapXep = [...numbers].sort((a, b) => a - b);
  document.getElementById("mangSapXep").textContent = mangSapXep;
  // 8. Tìm số nguyên tố đầu tiên trong mảng
  const soNguyenToDauTien = numbers.find((num) => isPrime(num));
  document.getElementById("soNguyenToDauTien").textContent =
    soNguyenToDauTien !== undefined ? soNguyenToDauTien : -1;
  // 9. Nhập thêm 1 mảng số thực
  const mangSoThuc = prompt("Nhập thêm mảng số thực (cách nhau bằng dấu phẩy):");
  const soLuongSoNguyen = mangSoThuc
    .split(",")
    .filter((num) => Number.isInteger(parseFloat(num))).length;
  document.getElementById("mangSoThuc").textContent = soLuongSoNguyen;
  // 10. So sánh số lượng số dương và số lượng số âm
  const soLuongSoDuong = numbers.filter((num) => num > 0).length;
  const soLuongSoAm = numbers.filter((num) => num < 0).length;
  const ketQuaSoSanh =
    soLuongSoDuong > soLuongSoAm
      ? "Số dương nhiều hơn số âm"
      : soLuongSoDuong < soLuongSoAm
      ? "Số âm nhiều hơn số dương"
      : "Số dương bằng số âm";
  document.getElementById("soSanhDuongAm").textContent = ketQuaSoSanh;
}
// Hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
