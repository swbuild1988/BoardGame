import xlrd
import json

class Solution(object):
    # 地格信息转换
    def change1(self, file):
        data = xlrd.open_workbook(file)
        table = data.sheets()[3]
        nrows = table.nrows
        returnData = []

        keys = table.row_values(0)

        for i in range(1, nrows):
            content = table.row_values(i)
            tmp = {}
            # 只要前三列
            for j in range(3):
                tmp[keys[j]] = content[j]
            returnData.append(tmp)

        # returnJson = json.dumps(returnData, ensure_ascii=False)
        
        filename = 'cellParam.json'
        with open(filename, 'w', encoding='utf-8') as file_obj:
            json.dump(returnData, file_obj, ensure_ascii=False)

        return filename


s = Solution()
print(s.change1("message.xlsx"))
