import java.awt.*;
import java.applet.*;

/*<applet code="ScrollbarDemo" width="500" height="500">
<param name="width" value="500"/><param name="height" value="500"/>
</applet>*/

public class ScrollbarDemo extends Applet implements AdjustmentListener, MouseMotionListener {

	String msg="";
	Scrollbar hsb,vsb;

	public void init(){
		int width=Integer.parseInt(getParameter("width"));
		int height=Integer.parseInt(getParameter("height"));

		vsb=new Scrollbar(Scrollbar.VERTICAL,0,1,0,width);
		hsb=new Scrollbar(Scrollbar.HORIZONTAL,0,1,0,height);

		add(vsb);
		add(hsb);
		
		hsb.addAdjustmentListener(this);
		vsb.addAdjustmentListener(this);
		addMouseMotionListener(this);
	}
	public void mouseDragged(MouseEvent me){
		int x= me.getX();
		int y= me.getY();
		vsb.setValue(y);
		hsb.setValue(x);
		repaint();
	}

	public void mouseMoved(MouseEvent arg0){
	}

	public void paint(Graphics g){
		msg="Vertical"+vsb.getValue();
		msg="Horizontal"+hsb.getValue();
		g.drawString(msg,10,10);
		g.drawString("*",hsb.getValue(),vsb.getValue());
	}

}

