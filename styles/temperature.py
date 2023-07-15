def f2c(f):
    c = (f - 32) * 5 / 9 
  return c
 
f = float(input("請輸入華氏幾度："))
print("攝氏：", f2c(f), '度')
   