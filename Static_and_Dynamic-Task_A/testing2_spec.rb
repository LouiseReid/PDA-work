require "minitest/autorun"
require "minitest/rg"

require_relative "testing_task_2"

class TestTests < MiniTest::Test

  def test_func1
    assert_equal(true, func1(1))
    assert_equal(false, func1(2))
  end

  def test_max
    assert_equal(2, max(2, 1))
  end

  def test_looper
    assert_equal(10, looper)
  end



end
