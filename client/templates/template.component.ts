import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app',
    template: `
    <!--  HEADER -->
    <header class="bg-white-only header header-md navbar navbar-fixed-top-xs">
        <header-partial class="hbox"></header-partial>
    </header>
    <!--  HEADER -->

    <section>
        <section class="hbox stretch">
            <!--  SIDEBAR -->
            <aside class="bg-black dk nav-xs aside hidden-print" id="nav"> 
                <sidebar-partial class="hbox stretch"></sidebar-partial>
            </aside>
            <!--  SIDEBAR -->
            <section id="content">
                <section class="hbox stretch">
                    <section>
                        <section class="vbox">
                            <section class="scrollable padder-lg w-f-md" id="bjax-target">
                                <router-outlet></router-outlet>
                            </section>
                            <footer class="footer bg-dark">
                                <!--  FOOTER -->
                                <footer-partial class="hbox"></footer-partial>
                                <!--  FOOTER -->
                            </footer>
                        </section>
                    </section>
                </section>
                <a href="#" class="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
            </section>
        </section>
    </section>
    `
})
export class TemplateComponent{
    constructor(){
    }
}