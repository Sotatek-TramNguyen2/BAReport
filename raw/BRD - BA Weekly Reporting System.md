# **Business Requirements Document (BRD)**
## **Hệ thống Quản lý và Báo cáo Tuần BA (BA Weekly Reporting System)**
### -----**1. Tổng quan dự án (Project Overview)**
Dự án nhằm mục đích xây dựng một hệ thống quản lý tập trung thay thế cho quy trình báo cáo qua Google Sheets/Forms hiện tại. Hệ thống cung cấp công cụ để theo dõi tiến độ, quản lý nguồn lực (Resource Allocation), giám sát chất lượng các dự án (Delivery & Presales) của đội ngũ Business Analyst thuộc các khối GEX (GEX1, GEX2, GEX3, GEX4). Đồng thời, hệ thống ứng dụng AI để tự động phân tích và tạo báo cáo tóm tắt rủi ro, cảnh báo hiệu suất dựa trên bộ Guideline tiêu chuẩn.
### **2. Mục tiêu (Objectives)**
- **Tự động hóa & Tập trung hóa:** Chuyển đổi toàn bộ quy trình thu thập dữ liệu báo cáo tuần của BA lên một nền tảng duy nhất, giảm thiểu sai sót do thao tác thủ công.
- **Quản trị Phân quyền (RBAC):** Đảm bảo bảo mật và luồng công việc rõ ràng giữa các cấp độ quản lý (DM, BAM, BAL) và nhân viên (BA).
- **Tối ưu Quản lý Nguồn lực:** Theo dõi sát sao tình trạng "Quá tải" (Overloaded), "Đang rảnh" (Available), hoặc "Cần hỗ trợ" để điều phối chéo giữa các GEX.
- **AI-Driven Insights:** Ứng dụng AI để đọc hiểu các báo cáo text (Risk & Blocker, Progress) và đưa ra nhận định (RED/YELLOW/GREEN) hoặc dự báo High-win cho các dự án Presales.
### **3. Phân quyền Người dùng (Role-Based Access Control - RBAC)**
Hệ thống có 2 nhóm quyền chính:

- **Nhóm Quản lý (Management):** Division Manager (DM), BA Manager (BAM), BA Lead (BAL).
- **Nhóm Thực thi (Execution):** Business Analyst (BA Member).
### **4. Yêu cầu Chức năng (Functional Requirements)**
#### **4.1. Module Dành cho Quản lý (DM, BAM, BAL)**
**A. Dashboard Tổng quan (Overall View) -  dashboard chung cho cả Quản lý và BA**

Màn hình Dashboard cung cấp cái nhìn toàn cảnh về tình hình báo cáo và sức khỏe dự án của toàn bộ các GEX.

|Data Field|Description / Purpose|
| :- | :- |
|Division Metrics|<p>Thống kê theo từng khối (GEX1, GEX2, GEX3, GEX4): Số BA đã báo cáo, Số BA phải báo cáo, Tiến độ (Progress % = Số BA đã báo cáo / Số BA phải báo cáo), Danh sách BA chưa báo cáo.</p><p>Click vào xem chi tiết từng row của từng GEX sẽ ra **D. View Báo cáo Tuần & AI Generated Report (Weekly Report)** theo filter GEX đó</p>|
|Member Health Check|Cảnh báo nhân sự: MEMBER having a bad week, Members cần hỗ trợ, MEMBER báo quá tải.|
|Risk Tracking|<p>Theo dõi các Task/Project bị đánh giá có rủi ro </p><p>- lấy từ report của BA</p><p>- lấy từ đánh giá của Lead về Quality/ Progress/ Efforts, và điền vào Risk liên quan BA, Risk liên quan tới dự án, Actions (Member & Lead)</p><p>- lấy từ tiến độ dự án so với lúc khởi tạo ban đầu</p>|

**B. Quản lý Dự án (Setup BA Projects) - mọi người đều được view**

Cho phép quản lý khởi tạo, cập nhật thông tin Master Data của các dự án thực tế và Presales.

|Tab|Data Field|Description|
| :- | :- | :- |
|Thông tin chung|Project Info|Division (GEX), Name, Contract Type (ODC - T&M, Fixed Price), Summary, Country.|
||Timeline|Start Date, End Date.|
||Status & Tracking|Status (Research/ Presale, Design, Development, Deployment, Maintenance, Pending).|
||BA tham gia|<p>- Chọn trong số list từ **C. Quản lý Nguồn lực (Setup Resources)**</p><p>- Effort tham gia từng bạn (ánh xạ từ phân bổ BA ở dưới)</p><p>- Tick bạn nào là lead</p>|
|Phân bổ BA||<p>Hiển thị bảng Phân bổ BA như sau:</p><p>![](Aspose.Words.35c2d757-44d3-42f5-8321-159159234652.001.png)</p><p>- Cột: tên dự án</p><p>- Hàng: tên các BA</p><p>- Mỗi ô là phân bổ effort BA (ánh xạ từ Edit Project ở trên)</p><p>- Quản lý có thể chỉnh sửa effort BA ở cả 2 nơi: Edit Project và Phân bổ BA </p>|

**C. Quản lý Nguồn lực (Setup Resources) - chỉ cấp Quản lý được view**

Quản lý danh sách nhân sự BA trên toàn hệ thống.

|Data Field|Description|
| :- | :- |
|Member Info|Tên, Email (SSO SotaTek), Division (GEX1 - GEX4), Rank (Intern/Fresher/Junior/Middle/Lead/Manager).|
|Status|<p>Tick rạng thái "Không cần báo cáo"</p><p>Ghi chú</p>|
|Effort được phân bổ|<p>Effort được phân bổ vào từng dự án</p><p>Có cảnh báo nếu dưới 70% hoặc trên 100%</p>|

**D. View Báo cáo Tuần, Presales & AI Generated Report (Weekly Report)**

Hiển thị chi tiết báo cáo của các dự án theo filter GEX, theo tuần (Format W1 M1). Chi thành 3 tabs:

- **Report Báo cáo Tuần:** 
  - **Manually Report:** Project, Effort thực tế (%), Last Week (Kết quả), Next Week (Kế hoạch), Risk & Blocker, Need help (tick có thì expand field để điền). Cho phép search tên dự án
  - **AI Generated Report (summarize lấy từ Báo cáo Tuần, cho từng dự án):** AI sẽ tự động đọc các trường "Last Week", "Risk & Blocker", "Summary" của các BA member để:
    - Tóm tắt theo format: Quy định ở **6. Format AI Generated Report**
    - Đề xuất "Đánh giá" dựa trên định nghĩa trong **6. Format AI Generated Report**
    - Đánh giá chéo Effort (%) xem có hợp lý với khối lượng công việc được mô tả hay không.
- **AI Generated Report (summarize lấy từ Báo cáo Tuần, cho toàn GEX):** AI sẽ tự động đọc **AI Generated Report (summarize lấy từ Báo cáo Tuần, cho từng dự án):**
  - Tóm tắt theo format: Quy định ở **6. Format AI Generated Report**
  - Tóm tắt các Risk của từng GEX.
  - Đánh giá chéo Effort (%) xem có hợp lý với khối lượng công việc được mô tả hay không.
- **Manual Report Presales:** Project, Received Date, Submission Date, STATUS (In Progress, Submitted, Lost, Won), Summary, BA in Charge, PM in Charge. Cho phép search tên dự án.
#### **4.2. Module Dành cho BA Member (BA)**
**A. Khai báo Báo cáo Tuần (Submit Weekly Report - RAW Data)**

Giao diện thân thiện để BA điền báo cáo hàng tuần, có thể lưu nháp (Save Draft) và tự động kéo Master Data (Tên dự án, Division) về để tránh gõ sai.

|Section|Data Field Input|
| :- | :- |
|Thông tin chung|Địa chỉ email, Division (Tự động map theo account), Tuần báo cáo.|
|<p>Tạo báo cáo (Lặp lại cho nhiều dự án)</p><p>- Cho phép nhiều BA cùng report cho 1 dự án</p><p>- Cho phép các BA chỉnh sửa cùng 1 field </p>|<p>- Tên Dự án/Task (Chọn từ Dropdown Master Data)</p><p>- Trạng thái dự án/task (lấy từ **B. Quản lý Dự án (Setup BA Projects)**</p><p>- Tỷ trọng effort (%): auto filled từ tuần trước, nếu không có thì để trống, có thể chỉnh sửa</p><p>- Kết quả công việc tuần qua (Text): auto filled theo **Kế hoạch tuần tới** của tuần trước, hoặc có BA nào đã chỉnh sửa thì autofill để BA tới chỉnh sửa tiếp, nếu không có thì để trống, có thể chỉnh sửa</p><p>- Kế hoạch tuần tới (Text)</p><p>- Risk & Blocker (Text): auto filled theo **Risk & Blocker** của tuần trước, nếu không có thì để trống, có thể chỉnh sửa</p>|
|Phân bổ Nguồn lực (Optional - nếu tuần này BA ko điền thì auto fill theo tuần trước)|<p>Chia tỷ trọng (%) cho các hạng mục: [1. Dự án], [2. Interview], [3. Training], [4. Presales], [5. Khác] (Cần có text mô tả nếu chọn Khác).</p><p>Cần hỗ trợ? (Có/Không), Nội dung hỗ trợ, Điểm tuần (Week Rating 1-5), Khả năng tiếp nhận thêm việc (Available / Full tải / Quá tải).</p>|
### **Thao khảo UI này**
![](Aspose.Words.35c2d757-44d3-42f5-8321-159159234652.002.png)

Ảnh 1: Tạo báo cáo mới

![](Aspose.Words.35c2d757-44d3-42f5-8321-159159234652.003.png)

Ảnh 2: Danh sách báo cáo của GEX 1 - W1 M5

### **5. Yêu cầu Phi chức năng (Non-Functional Requirements)**
- **Authentication & Authorization:** Tích hợp đăng nhập qua Google Workspace (Email công ty). Phân quyền chặt chẽ dựa trên Email đã được setup trong bảng Master Data Resources. Một BA bình thường không thể truy cập những tính năng của DM.
- **Tính khả dụng (Availability):** Form báo cáo phải thân thiện trên cả PC và Responsive (do BA thường làm report vào cuối ngày/cuối tuần).
- **AI Integration:** Sử dụng LLM (Large Language Model) thông qua API an toàn, cam kết bảo mật dữ liệu khách hàng (Non-Disclosure Agreement), không sử dụng data dự án để public train AI.
- **Data Export:** Hỗ trợ xuất dữ liệu ra file Excel/CSV đúng chuẩn định dạng (RAW) hiện tại để phục vụ backup hoặc migrate hệ thống.
### <a name="_kudse9nli0xd"></a>**6. Format AI Generated Report**
Phân hệ AI Generated Report đóng vai trò như một trợ lý ảo, tự động đọc và phân tích dữ liệu từ báo cáo thô (RAW Data) của các BA Member, sau đó tổng hợp lại theo các định dạng chuẩn hóa nhằm tiết kiệm thời gian cho cấp Quản lý (DM, BAM, BAL).
#### <a name="_7u464tqls8sb"></a>**6.1. Format Tóm tắt Tiến độ (Project Progress Summary)**
AI sẽ trích xuất dữ liệu từ các trường "Last Week", "Next Week", "Risk & Blocker" và "Summary" để cô đọng lại tối đa 3-4 dòng cho mỗi dự án, giúp quản lý đọc lướt (skim) dễ dàng:

- **Project/Task:** [Tên Dự án] - **BA in Charge:** [Tên các BA]
- **Key Achievements:** [Tóm tắt các ý chính về kết quả tuần qua. Ví dụ: Hoàn thành SRS sprint 3; Chốt scope với khách hàng].
- **Next Steps:** [Tóm tắt các ý quan trọng cho tuần tới].
- **Key Blocker:** [Rút trích rủi ro cốt lõi. Nếu không có, ghi "Không có"].
#### <a name="_ncomd08svsxd"></a>**6.2. Tiêu chí Đề xuất "Đánh giá" (Automated Metric / Quality Evaluation)**
Dựa trên nguyên tắc quy định ở bộ Guidelines về Quality (Q) và Communication, AI sẽ rà quét keyword trong báo cáo để đề xuất gắn nhãn trạng thái (Task Metric) cho từng BA:

- 🔴 **RED (Blocker / Critical Failure):**
  - **Dấu hiệu nhận biết:** Nhắc đến các từ khóa báo động như "sai logic", "miss requirement", "khách hàng phàn nàn", "bug nghiêm trọng", hoặc BA tự report có blocker không thể tự giải quyết.
  - **Đề xuất:** Đánh dấu đỏ để BAL/BAM lập tức nhảy vào xử lý (Action required).
- 🟡 **YELLOW (Friction / Needs Improvement):**
  - **Dấu hiệu nhận biết:** Output có sạn nhỏ (miss edge cases), requirement/ticket phải sửa lại nhiều lần, hoặc giao tiếp với khách hàng/dev đang chậm trễ (delay response). Tiến độ bị chệch nhẹ so với kế hoạch ban đầu.
  - **Đề xuất:** Đánh dấu vàng để BAL theo dõi sát sao hơn trong tuần tới.
- 🟢 **GREEN (Effective & Clear):**
  - **Dấu hiệu nhận biết:** Công việc trôi chảy, mô tả kết quả tuần qua khớp với kế hoạch, không có rủi ro nào được nêu, output (Docs/Tickets) rõ ràng và team dev không có phàn nàn.
#### <a name="_dddcvenbnsjd"></a>**6.3. Format Tóm tắt Risk & Báo cáo Sức khỏe cấp GEX (GEX Risk & Health Summary)**
Gửi một bản tóm tắt (Executive Summary) tự động hàng tuần cho Division Manager (DM) và BAM của từng GEX:

- **🔥 High-Priority Risks (Dự án/Task Đỏ):** Danh sách liệt kê nhanh các dự án đang ở trạng thái At Risk / RED Metric. *(Format: Tên Dự án - Vấn đề cốt lõi).*
- **⚠️ Potential Risks (Dự án/Task Vàng):** Danh sách các dự án có nguy cơ trễ hạn hoặc có vấn đề tiềm ẩn.
- **🚑 Member Health Check (Sức khỏe nhân sự):**
  - Danh sách BA đang bị **Overloaded** (Khả năng tiếp nhận thêm việc = Quá tải).
  - Danh sách BA đang có **Week Rating thấp** (1-2 sao) (Member having a bad week).
  - Danh sách BA **Cần hỗ trợ** (Tick "Có" ở mục Need Help).
#### <a name="_y2uqw5kjolbt"></a>**6.4. Định dạng Đánh giá chéo Effort (Effort Validation Cross-check)**
AI sẽ thực hiện đối chiếu logic giữa **Tỷ trọng effort (%)** và **Khối lượng công việc (Text)** được BA mô tả, sau đó đưa ra 1 trong 2 trạng thái kế bên cột Effort của Report:

- ✅ **Logical (Hợp lý):** % Effort phân bổ tương xứng với lượng text mô tả công việc.
- ⚠️ **Anomaly Alert (Cảnh báo Bất thường):**
  - *Cao bất thường (Effort cao - Việc ít):* Ví dụ BA điền Effort 80-100% nhưng phần kết quả công việc chỉ mô tả "Fix 1 bug text", "Review 2 UI tickets". Hoặc effort do BA tự báo cáo cao hơn effort được Quản lý log.
  - *Thấp bất thường (Effort thấp - Việc nhiều):* Ví dụ BA điền Effort 10-20% nhưng mô tả công việc ôm đồm "Viết xong PRD 50 trang, test hệ thống, họp khách hàng 3 buổi". Hoặc effort do BA tự báo cáo thấp hơn effort được Quản lý log.
  - *Mục đích:* Giúp Lead/BAM nhanh chóng nhìn ra điểm bất hợp lý để hỏi lại BA member, đảm bảo tính minh bạch của báo cáo nguồn lực.

