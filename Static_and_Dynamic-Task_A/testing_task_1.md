### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.

 ```
 <!-- should be def func1(val) and == -->
def func1 val
  if val = 1
  return true
  else
  return false
  end
end

<!-- should be def max(a, b) and has one too many ends -->
dif max a b
  if a > b
      return a
  else
  b
  end
end
end

<!-- should be for i in (1..10), needs a return i at end so if loop below works -->
def looper
  for i in 1..10
  puts i
  end
end

failures = 0

<!-- missing a closing end -->
if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1

if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end

<!-- would fail due to spelling mistake failrues -->
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end

<!-- > 0-->
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

```
