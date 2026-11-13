class SinhVien {
    constructor(maSV, hoTen, tuoi, diemTB) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diemTB = diemTB;
    }

    kiemTraLenLop = () => {
        return this.diemTB >= 5 ? "Đủ điều kiện lên lớp" : "Chưa đủ điều kiện lên lớp";
    };
}

const danhSachSV = [
    new SinhVien("SV001", "Nguyễn Lê Duy Anh", 20, 8.5),
    new SinhVien("SV002", "Trần Gia Bảo", 19, 6.0),
    new SinhVien("SV003", "Đoàn Mai Nhật Anh", 21, 4.5),
    new SinhVien("SV004", "Nguyễn Bảo Khánh", 20, 7.5),
    new SinhVien("SV005", "Mang Thiên Trường", 19, 5.0)
];

console.log("=== DANH SÁCH SINH VIÊN ===");
danhSachSV.forEach((sv, index) => {
    console.log(`\nSinh viên ${index + 1}:`);
    console.log(`  Mã SV: ${sv.maSV}`);
    console.log(`  Họ tên: ${sv.hoTen}`);
    console.log(`  Tuổi: ${sv.tuoi}`);
    console.log(`  Điểm trung bình: ${sv.diemTB}`);
    console.log(`  Kết quả: ${sv.kiemTraLenLop()}`);
});